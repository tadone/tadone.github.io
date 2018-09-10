---
title: "Fundementals"
sidebarDepth: 2
---

### Managing Services

**Service** can be several processes, e.g., httpd (web-service) or a database. Splitting a service into multiple processes is done for performance reasons.
**Process** - Process is a running program. At a particular instant of time, it can be either running, sleeping, or zombie (completed process, but waiting for it's parent process to pick up the return value).
**Daemon** is a subset of services that always run in memory waiting to service a request.

## System

**Important Files/Directories**
```bash
/usr/lib/systemd/system/                # systemd unit files
/etc/systemd/system/                    # Custom systemd files created by the admin
/etc/yum.repos.d/name.repo              # Location of Repository files (updates, software)
/etc/shadow                             # List of users and encrypted passwords
/etc/passwd                             # List of users with UID/GID, home dir, and default shell
/etc/group                              # List of groups with Group ID (GID)
/etc/sudoers                            # List of users that have sudo permissions
/etc/hosts                              # Hosts file for IP to Host binding
```

**Process Management**
```bash
ps  a      # show processes for all users
    u      # display the process(s) user/owner
    x      # also show processes not attached to a terminal
# Example:
ps aux | head -10           # Show top ten running processes
ps aux | grep <process>
```

**Packages RPM**
```bash
# INSTALL
rpm -ivh <rpm-file>                   # Install new rpm package

# INFO
rpm -q --whatprovides `which crond`   # Find out what rpm package provides a binary
rpm -q --list                         # -l list files in package (BINARIES)
rpm -q --configfiles cronie           # -c Conifg files for package
rpm -q --docfiles <rpm_package>       # -d Doc files

# FIND
rpm -qa | grep cronie                 # Query all installed packages
```
**Packages DNF**
Manage software on Fedora
```bash
dnf provides crond                    # Find out what package provides binary crond.
```
---
## Users

```bash
useradd <username>                    # Add new user named: new_user
passwd <username>                     # Change password for a user

id <username>                         # User Info

useradd -u 999 <username>             # Add new_user with User ID 999
        -d /data/projects <username>  # Set home for new_user to /data/projects (as opposed to /home/new_user)
        -u 1000 -g 500 <username>     # Add new_user with User ID 1000 and Group ID 500
        -G admins,webadmin <username> # Add new_user to multiple Groups
        -m -d /var/www/ravi -s /bin/bash -c "TecMint Owner" -U ravi

chsh [-s login_shell] [user]          # Change user shell
chsh -s /bin/bash fred                # Example

usermod -aG <group> <username>        # Add user to another group

sudo visudo                           # Add user to sudoers
## Same thing without a password
#%wheel ALL=(ALL)       NOPASSWD: ALL
ec2-user        ALL=(ALL)       NOPASSWD:ALL

deluser –remove-home <username>       # Delete user along with the home directory
```
---
## SYSTEMD
**Tools**
```bash
systemctl start/stop/enable/status httpd              # Start, Stop, Enable, and Status of Service
systemctl list-units -t service --state=active        # Lists all services that are active
systemctl list-unit-files -t service --state=enabled  # Lists all services that are enabled

hostnamectl set-hostname <new_name>                   # Set system hostname to new_name

timedatectl set-timezone Europe/Warsaw                # Set time-zone to Warsaw
timedatectl status                                    # Show current time settings

journalctl -b                           # To see boot-related messages from the current boot
journalctl --since "1 hour ago"         # Messages logged within the last hour
journalctl -fu nginx.service            # Follow by unit
journalctl -n 50 --since "1 hour ago"   # Last 50 entries since an hour ago
journalctl --tail 50 -u nginx.service   # Last 50 entires for unit nginx
# FIREWALLD
systemctl status firewalld                   # FirewallD status
firewall-cmd --list-all                      # List all settings for a default zone
firewall-cmd --permanent --add-port=7090/tcp # Open port for default zone
```
**Unit File Example**
[Understanding Systemd Units and Unit Files](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files)
```bash
#[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)# his directive provides a location for a list of URIs for documentation
After=network.target sshd-keygen.service    # The units listed in this directive will be started before starting the current unit
Wants=sshd-keygen.service                   # Systemd will attempt to start any units listed here when this unit is activated

#[Service]
EnvironmentFile=/etc/sysconfig/sshd
ExecStart=/usr/sbin/sshd -D $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

#[Install]
WantedBy=multi-user.target
```
---
## SSH And SCP

```bash
ssh -A user@host                            # Forward your ssh key

ssh-keygen -t rsa -b 4096                   # Generate SSH Key-Pair -t type RSA -b key size 4096
ssh-keygen -c "tadone@gmail.com"            # Add custom comment when generating the key-pair
ssh-keygen -f ~/tad_id                      # Generate SSH Key specyfing the file name

ssh-copy-id user@hostname.example.com
ssh-copy-id "user@host -p 6842"
ssh-copy-id -i ~/.ssh/tad_id.pub user@host                          # Copy public key to new host
# This key will be installed in ~/.ssh/authorized_keys on the remote host

# Copy over SSH
scp file your_username@remotehost.edu:/some/remote/directory    # Copy file TO remote host
scp your_username@remotehost.edu:file /some/local/directory     # Copy file FROM a remote host
scp file1 file2 your_username@remotehost.edu:~                  # Copy multiple files
scp -P 2264 file your_username@remotehost.edu:/some/remote/directory # Specify a custom port (Capital P)

```
