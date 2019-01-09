---
title: "Personal Configurations"
sidebarDepth: 2
---

## RaspberryPi

### Hypriot Docker
Flash SD card using [flash](https://github.com/hypriot/flash) tool.
```bash
# Install prerequisites
brew install pv
brew install awscli

# Download binary
curl -LO https://github.com/hypriot/flash/releases/download/latest/flash
chmod +x flash
sudo mv flash /usr/local/bin/flash

# Flash the sd card passing the static.yml cloud-init 
flash -u static.yml ~/Downloads/hypriotos-rpi-v1.9.0.img.zip

# Alternatively download & flash
flash https://github.com/hypriot/image-builder-rpi/releases/download/v1.9.0/hypriotos-rpi-v1.9.0.img.zip
```
### Pi-hole
Disable ``resolved`` before running pi-hole
```bash
sudo systemctl disable systemd-resolved.service
sudo service systemd-resolved stop
```
### Cups Server
Based on: [Docker-Cups-Server](http://www.theghostbit.com/2016/10/setting-up-cups-server-with-docker-on.html)
rpi3 = Raspberry Pi3. Running docker image of cups server
Build your own image using dockerfile based on ARM architecture.
```bash
# Build cupsd
docker build -t cupsd .

# Get printer's info
BUS=$(lsusb | grep Brother | awk '{print $2}')
DEV=$(lsusb | grep Brother | awk '{print $4}')
PRINTER="/dev/bus/usb/$BUS/$DEV"
# OR
``/dev/bus/usb/001/004``

# Run cupsd docker image passing $PRINTER device
docker run -d -p 631:631 --name cups-server --net=host --device=$PRINTER cupsd
```
Server setup:
- Attach your printer to the rpi3.
- Exec into the container running cups-server.
- Find out the URI of your printer with ``lpinfo -v |grep usb``

In my case the output is

``direct usb://Brother/HL-L2300D%20series?serial=E73860G5N986807``

so the URI is

``usb://Brother/HL-L2300D%20series?serial=E73860G5N986807``

Now that we know the URI, we can add the printer to the system. In my case the command is:

``lpadmin -p HL-L2300D -v usb://Brother/HL-L2300D%20series?serial=E73860G5N986807``

Now the printer is known to the system but disabled. You can check the status with:
``lpstat -p $NAME -l`` In my case I got:

```
$ sudo lpstat -p HL-L2300D -l
printer HL-L2300D disabled since Sun 02 Sep 2018 16:22:43 UTC -
	reason unknown
```

We now have to enable the printer with sudo cupsenable $NAME, which in my case translates to

``cupsenable HL-L2300D``

It is now enabled:
```
$ sudo lpstat -p HL-L2300D -l
printer HL-L2300D is idle.  enabled since Sun 02 Sep 2018 16:23:17 UTC
```
Finally we have to tell CUPS that it may accept print tasks for this printer with:

``cupsaccept HL-L2300D``

Hint: If something goes wrong, you can remove the printer with ``lpadmin -x $NAME`` and start from scratch.

Client setup:

Install the appropriate driver for your printer under MacOS or Windows.
On MacOS:
- Bring up the System Preferences tool.
- Choose Print and Scan.
- Click on the plus sign to add a printer.
- Choose IP (as opposed to Default, Fax or Windows)
- Put an address of 192.168.1.10:631
- Use IPP protocol
- Put a queue of /printers/<CUPS-Queue-Name>
- OPTIONALY, change name and location
- Use Brother 2300D driver from the driver dropdwon (not Generic PostScript)
- Click on Add