---
title: "Bash Shell"
sidebarDepth: 2
---

## Shortcuts
```bash
ctrl-a  # Move to the start of line
ctrl-e  # Move to end of a line

ctrl-k  # Remove (Cut) text after the cursor
ctrl-y  # Yank text (Copy)

ctrl-r  # Search previous command from history
```

## Shell Basics

* Export variable to the environment. All child processes will get this variable: ``export varname=value``
* Display current Shell Variables ``set``
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

### Symbolic Links
Use `-f` to force overwrite  
`ln -s source_file target_file`

### Brace Expansion

```bash
echo foo{1,2,3}.txt # Output: foo1.txt foo2.txt foo3.txt
cp -v file1.txt{,.bak} # Output: file1.txt -> file1.txt.bak

echo file{a..d}.txt    # Output: filea.txt fileb.txt filec.txt filed.txt
mkdir -p /apache-jail/{usr,bin,lib64,dev} # Make multiple dirs
mv file.{txt,doc}      # Rename file.txt to file.doc
```

### Permissions
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
## GNU Tools

**AWK**
```bash
grep file | awk '{ print $2 }'              # Print second position
grep file | awk '{ print $5 ": " $9 }'      # Print column 5 then : and then column 9
grep file | awk -F ":" '{ print $2 }'       # Use : as a delimiter
```

**SED**
```bash
sed -i -e 's|foo|bar|g' filename
s   # is used to replace (substitute) the found expression “foo” with “bar”
g   # stands for “global”, meaning to do this for the whole line. If you leave off the g and “foo” appears twice on the same line, only the first “foo” is changed to “bar”.

-i  # option is used to edit in place on filename.
-e  # option indicates a command to run.
```

**FIND and XARGS**

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

**TAR**
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
