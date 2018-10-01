---
title: "GNU Tools"
sidebarDepth: 2
---

# Linux Tools
---

## TAR
Tool to create archives (Tape Archive)
```bash
# CREATE
tar -czvf archive.tar.gz <dir>    # Create Gzipped archive.tar from a directory
# TEST
tar -tvf archive.tar              # List all files in archive.tar verbosely
# EXTRACT
tar -xf archive.tar               # Extract all files from archive.tar
# CREATE TOP LEVEL
tar -czvf site1.tar.gz -C /var/www/ site1   # Create archive from site1 directory (site1 is top level dir)
```

## CURL
https://linuxacademy.com/howtoguides/posts/show/topic/13852-understanding-curl-and-http-headers
Get response headers from the server:
```bash
curl --head www.acooke.org    # Get headers
curl -I www.acooke.org        # Older way
curl -vI www.acooke.org       # -v for verbose
```
Download a file:
``-O`` (uppercase O) the filename in the URL will be taken and it will be used as the filename to store the result
```bash
curl -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html # Custom file name "mygettext.html"
curl -O http://www.gnu.org/software/gettext/manual/gettext.html                # Same name as original file "gettext.html"
```
Grep output of a curl command:
```bash
curl -vs google.com 2>&1 | grep pattern
```
**For simple download of a file use ``wget <URL>``**

## SED
```bash
sed -i -e 's|foo|bar|g' filename
s   # is used to replace (substitute) the found expression “foo” with “bar”
g   # stands for “global”, meaning to do this for the whole line. If you leave off the g and “foo” appears twice on the same line, only the first “foo” is changed to “bar”.

-i  # option is used to edit in place on filename.
-e  # option indicates a command to run.
```

## AWK
```bash
grep file | awk '{ print $2 }'              # Print second position
grep file | awk '{ print $5 ": " $9 }'      # Print column 5 then : and then column 9
grep file | awk -F ":" '{ print $2 }'       # Use : as a delimiter
```

Three ‘blocks’ of instructions are used in awk:

* ``BEGIN``, executed before the first input line is read
* The ``main loop`` executed for each line of input
* ``END`` executed after the last input line has been read
  - The BEGIN and END procedures are optional

Each input line is treated as a record, referred to as $0 and each word (delimited by spaces or tabs) is treated as a field. Fields are referenced by using a ``“$”`` ($1 –  first field, $2 – second, and so on).

Simple Example:
```Bash
$ cat <file.txt>
# OUTPUT
avi 1200 haifa
dani 2300 tel aviv
rina 3100 aco

$ awk '{ print $1,"-",$3 }' <file.txt>
# OUTPUT
avi - haifa
dani - tel
rina - aco
```
Simple print the file:
```bash
awk ' { print } ' <file.txt>
```
Use BEGIN and END:
```Bash
$ awk 'BEGIN { print "Customers List:\n==="} { print } END { print "====\nnum:" NR }' <file.txt>
# OUTPUT
Customers List:
===
avi 1200 haifa
dani 2300 tel aviv
rina 3100 aco
====
num:3
```

**Example:**

```bash
$ cat <file.txt>
avi,1200,haifa
dani,2300,tel aviv
rina,3100,aco

$ awk 'BEGIN{ FS=","} {print $3,$2}' <file.txt>
# OUTPUT
haifa 1200
tel aviv 2300
aco 3100

$ awk 'BEGIN{ FS=","; OFS="*"} {print $3,$2}' <file.txt> # Output separator will be '*'
# OUTPUT
haifa*1200
tel aviv*2300
aco*3100
```
| Predefined awk values |                                           |
| --------------------- | ----------------------------------------- |
| FS                    | Field separator – default spaces and tabs |
| OFS                   | Output field separator – default space    |
| RS                    | Record separator – default newline        |
| ORS                   | Output record separator – default newline |
| OFMT                  | Output format – default “%.6g”            |

| Constants: |                                                           |
| ---------- | --------------------------------------------------------- |
| NF         | Number of Fields, ie number of words on a particular line |
| NR         | Number of Records, ie number of lines read thus far       |
| FILENAME   | The name of the current file being processed              |
| FNR        | Current line number in the current file (nawk only)       |

## GPG
Use ``gpg`` to encrypt & decrypt files and directories. Install gpg from any Linux repository.

**Encrypt a file in Linux or Unix**
```bash
$ gpg -c myfinancial.info.txt
Enter passphrase:<YOUR-PASSWORD>
Repeat passphrase:<YOUR-PASSWORD>
```
This will create a **myfinancial.info.txt.gpg** file

**Decrypt a file in Linux or Unix**
To decrypt file use the gpg command as follow:
```bash
$ gpg myfinancial.info.txt.gpg                    # Will decrypt to a file (Will ask to overwirte existing)
$ gpg -d myfinancial.info.txt.gpg                 # Will decrypt to STDOUT
$ gpg myfinancial.info.gpg -o new-file.info.txt   # Will decrypt to "new-file.info.txt" (-o output)

```
**Non Interactive**
```bash
# Encrypt it…
gpg --yes --passphrase <passphrase> -c <filename>

# Decrypt it…
gpg -–yes -–passphrase <passphrase> <filename>
```
## Rsync
Simple copy
``rsync -av --progress sourcefolder /destinationfolder --exclude thefoldertoexclude``

## Find

```bash
# list every file bigger than 20000 blocks (10MB if you have 512-byte blocks)
find / -type f -size +20000 -print
# find every file not accessed for the last week or more
find / -type f -atime +7 -print
```
## XARGS
``xargs`` Takes standard output from a command like find and pipes it into standard input

```bash
echo 'one two three' | xargs mkdir          # Creates 3 dirs "one", "two", "three"
echo 'one two three' | xargs -t rm          # Prints each command that will be executed (-t)
find /tmp -mtime +14 | xargs rm             # Find files older than 2 weeks and then remove them
```

```bash
find . -name '*.py' | xargs wc -l           # Find .py files in current dir and output to word count
find ./foo -type f -name "*.txt" | xargs rm
```
```bash
find ./foo -type f -name "*.txt" | xargs rm       # Remove all found files
echo 'one two three' | xargs mkdir
one two three                                     # Create dir for each argument
```
## DD
**Syntax**
```bash
dd if=<source file name> of=<target file name> [Options]
```

**Write ISO to USB**
1. Identify the name of the USB drive partition.

2. Unmount all mounted partition from that device. This is very important, otherwise the written image might get corrupted. You can umount all mounted partitions from the device with ``umount /dev/sdX*``, where X is the appropriate letter, e.g. ``umount /dev/sdc1``

3. Write the ISO file to the device:
```bash
# dd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct
```
4. Wait until the command completes.
_If you see dd: invalid status flag: 'progress', your dd version doesn’t support the status=progress option and you’ll need to remove it. In this case, you won’t see writing progress._

**Backup/Restore with DD**
```bash
# Backing up a partition to a file(to my home directory as hdadisk.img)
dd if =/dev/sda2 of=~/hdadisk.img
# Restoring this image file in to other machine
dd if=hdadisk.img of=/dev/sdb3
```
