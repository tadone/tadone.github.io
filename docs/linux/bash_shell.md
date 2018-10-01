---
title: "Bash Shell"
sidebarDepth: 2
---

## Shortcuts
```sh
ctrl-a  # Move to the start of line
ctrl-e  # Move to end of a line

ctrl-k  # Remove (Cut) text after the cursor
ctrl-y  # Yank text (Copy)

ctrl-r  # Search previous command from history
```

## Shell Basics

* Export variable to the environment. All child processes will get this variable: ``export varname=value``
* Display current Shell Variables ``set | sort``
* Set and Unset Shell Options:
    ```bash
    shopt -s <option> # Set shell option
    shopt -u <option> # Unset shell option
    ```
* Create symbolic link ``ln -s /path/to/file /path/to/symlink``
* Pass STDOUT and STDERR to /dev/null: ``command > /dev/null 2>&1``
* Time Stamps ``stat file``:
    * Access - the last time the file was read
    * Modify - the last time the file was modified (content has been modified). Virtually, every modify is create.
    * Change - the last time meta data of the file was changed (e.g. permissions) To display this information, you can use stat which is part of the coreutils.
* Command Substitution $(command)

## Built-In VS External
```sh
$ echo 'Echoed with a built-in!'
Echoed with a built-in!
$ /bin/echo 'Echoed with external program!'
Echoed with external program!

# type command will return what type of command it is (built-in vs external)
$ type echo
echo is a shell builtin
$ type ls
ls is hashed (/bin/ls)
```

## Links
Use `-f` to force overwrite
`ln -s source_file target_file # -s is for symbolic`

## Brace Expansion

```bash
$ echo {one,two,red,blue}fish
onefish twofish redfish bluefish

$ echo fish{one,two,red,blue}
fishone fishtwo fishred fishblue

$ echo fi{one,two,red,blue}sh
fionesh fitwosh firedsh fibluesh

echo foo{1,2,3}.txt # Output: foo1.txt foo2.txt foo3.txt
cp -v file1.txt{,.bak} # Output: file1.txt -> file1.txt.bak

echo file{a..d}.txt    # Output: filea.txt fileb.txt filec.txt filed.txt
mkdir -p /apache-jail/{usr,bin,lib64,dev} # Make multiple dirs
mv file.{txt,doc}      # Rename file.txt to file.doc
```

## Permissions
::: tip
```bash
find /home/user -type d -print0 | xargs -0 chmod 0775
find /home/user -type f -print0 | xargs -0 chmod 0664
```
:::

```bash
# Permissions:
1 – "can execute"
2 – "can write"
4 – "can read"
# Examples:
chmod 600 file – owner can read and write
chmod 700 file – owner can read, write and execute
chmod 666 file – all can read and write
chmod 777 file – all can read, write and execute
```

## Command Substitution
```sh
$ date +%d-%b-%Y
12-Mar-2004

$ today=$(date +%d-%b-%Y)

$ echo $today
12-Mar-2004

# listing of all the files from all the RPM packages that have httpd in the name
$ rpm -ql $(rpm -qa | grep httpd)

# Star will substitue for all files
$ for file in * ; do cp $file $file.bak; done
```
