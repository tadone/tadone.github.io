---
title: "Bash Scripting"
sidebarDepth: 2
---

# Bash Scripting

## Helpful Tips
Edit with SED if the string exist:
```sh
grep -q '^option' file && \                              # returns true/false if the string 'option' is there
sed -i "s/option = .*/option = my-setting/g" file        # replaces lines that start with 'option' string
```
Append multiple lines to a file:
```sh
# possibility 1:
echo "line 1" >> greetings.txt
echo "line 2" >> greetings.txt
# possibility 2:
echo -e "line 1\nline 2" >> greetings.txt
# possibility 3:
cat <<EOT >> greetings.txt
line 1
line 2
EOT
```
Install package if not installed already
```sh
if ! dpkg -s <apt_package> > /dev/null; then apt-get install -y <apt_package>; fi
```
#### ANSI Colors
::: tip
This is a tip
:::
The shell output can be colorized via ANSI escape codes
Requires Bash v4 and use of `printf` or `echo -e`
```bash
# COLORS
BLACK="\u001b[30m"
RED="\u001b[31m"
GREEN="\u001b[32m"
YELLOW="\u001b[33m"
BLUE="\u001b[34m"
MAGENTA="\u001b[35m"
CYAN="\u001b[36m"
WHITE="\u001b[37m"
# RESET
RESET = "\u001b[0m"                 # Reset the colors
# DECORATORS
BOLD="\u001b[1m"
UNDERLINE="\u001b[4m"
REVERSED="\u001b[7m"

echo -e "\u001b[31mHello"           # Prints Hello in red
echo -e "${BLACK}Hello${RESET}"     # Prints Hello in black and resets back
```

## Builtin variables

Variable  | What it means
--|--
``$0``  |   The name of the Bash script
``$1-$9``  |  1-9 Positional arguments to the script
``$#``  |  How many arguments were passed to the Bash script
``$@``  |  All the arguments supplied to the Bash script
``$?``  |  The **exit status** of the most recently run process
``$$``  |  The process ID of the current script
``$USER``  |  The username of the user running the script
``$HOSTNAME``  |  The hostname of the machine the script is running on
``$SECONDS``  |  The number of seconds since the script was started
``$RANDOM``  |  Returns a different random number each time is it referred to
``$LINENO``  |  Returns the current line number in the Bash script

## Redirect Output
Redirect STDOUT(1) and/or STDERR(2)

Command  |  What it does
--:|:--
`command 2> output.txt` | Outputs **ERROR** only to a file
`command &> output.txt` | Outputs both **OUTPUT** & **ERROR** to a file
`command &> /dev/null`  | Discards both **OUTPUT** & **ERROR**
`command > output.txt 2>&1`  | Posix way of redirecting stderr to stdout

**Recap**
- There are two places programs send output to: Standard Output (**stdout**) and Standard Error (**stderr**)
- You can redirect these outputs to a different place (like a file)
- File descriptors are used to identify stdout (1) and stderr (2)
- `command > output` is just a shortcut for `command 1> output`
- Using **2>&1** will redirect stderr to whatever value is set to stdout (and **1>&2** will do the opposite).

## Script Options
Use `set -` to enable option and `set +` to disable

``set -e`` - Causes the shell to exit if any subcommand or pipeline returns a non-zero status.
``set -x`` - Enables a mode of the shell where all executed commands are printed to the terminal
``set +x`` - Disables debug mode

## Read Input
```bash
#!/bin/bash
# Ask the user for login details
read -p 'Username: ' uservar            # -p prompt
read -sp 'Password: ' passvar           # -s silent
echo
echo Thankyou $uservar we now have your login details
```

## If Statement
The square brackets **[ ]** in the if statement above are actually a reference to the command **test**.
```bash
if [ <some test> ]
then
    <commands>
fi
```

```bash
if [ <some test> ]
then
    <commands>
elif [ <some test> ]
then
    <different commands>
else
    <other commands>
fi
```

``&&`` - Perform the **AND** operation.

``||`` - Perform the **OR** operation.


|              Operator | Description                                                           |
| ---------------------:|:--------------------------------------------------------------------- |
|          ! EXPRESSION | The EXPRESSION is false.                                              |
|             -n STRING | The length of STRING is greater than zero.                            |
|             -z STRING | The lengh of STRING is zero (ie it is empty).                         |
|     STRING1 = STRING2 | STRING1 is equal to STRING2                                           |
|    STRING1 != STRING2 | STRING1 is not equal to STRING2                                       |
| INTEGER1 -eq INTEGER2 | INTEGER1 is numerically equal to INTEGER2                             |
| INTEGER1 -gt INTEGER2 | INTEGER1 is numerically greater than INTEGER2                         |
| INTEGER1 -lt INTEGER2 | INTEGER1 is numerically less than INTEGER2                            |
|               -d FILE | FILE exists and is a directory.                                       |
|               -e FILE | FILE exists.                                                          |
|               -r FILE | FILE exists and the read permission is granted.                       |
|               -s FILE | FILE exists and it's size is greater than zero (ie. it is not empty). |
|               -w FILE | FILE exists and the write permission is granted.                      |
|               -x FILE | FILE exists and the execute permission is granted.                    |


## Common Tests

```bash
if command ; then echo "Command succeeded"; else echo "Command failed"; fi
if [ -z "$VAR1" ];  # This will return true if a variable is unset or set to the empty string
if [ -n "$VAR1" ];  # the inverse of -z
if [ ! -d "$DIR" ]; # Test if directory $DIR (does not !) exist(s)
# check if a variable is defined/non-NULL
test "$MYVAR"
[ "$MYVAR" ]

# check if a directory exists, if not, create it
test ! -d /home/user/foo && mkdir /home/user/foo
[ ! -d /home/user/foo ] && mkdir /home/user/foo
if [ ! -d /home/user/foo ]; then mkdir /home/user/foo; fi

# Listing directories
for fn in *; do
  [ -d "$fn" ] && echo "$fn"
done

# Check if a specific user exists in /etc/passwd
if grep ^myuser: /etc/passwd >/dev/null 2>&1; then
  echo "Yes, it seems I'm real"
else
  echo "Uh - am I a ghost?"
fi
# Mount with check
if ! mount /mnt/backup >/dev/null 2>&1; then
  echo "FATAL: backup mount failed" >&2
  exit 1
fi
# Multiple commands as condition. It's perfectly valid to do:
if echo "I'm testing!"; [ -e /some/file ]; then
  ...
fi
```

## Loops

``break`` - Exit the currently running loop.

``continue`` - Stop this iteration of the loop and begin the next iteration.

### While Loop
```bash

# Basic while loop
counter=1
while [ $counter -le 10 ]       # While counter is less then 10
do
    echo $counter
    ((counter++))               # Increment counter with each loop
done

while read url
do
    youtube-dl ... "$url"
done
```
**Single Line While Loop**
```bash
while true; do date; sleep 1; done
```
### Until Loop
```bash
# Basic until loop
counter=1
until [ $counter -gt 10 ]
do
    echo $counter
    ((counter++))
done
```

### For Loop
```bash
# Basic for loop
names='Stan Kyle Cartman'
for name in $names
do
    echo $name
done
```

### For Loop in Range
```bash
for value in {1..5}
do
    echo $value
done
```
---
## Functions
```bash
function_name () {
    <commands>
}
```
Pass Argument to Function
```bash
print_something () {
    echo Hello $1
}
print_something Mars                # OUTPUT: Hello Mars
print_something Jupiter             # OUTPUT: Hello Jupiter
```

## Arrays

**Creating Arrays**
```bash
names=("Bob" "Peter" "$USER" "Big Bad John")
photos=(~/"My Photos"/*.jpg)

files=$(ls)    # BAD, BAD, BAD!
files=(*)      # Good!
```

**Using Arrays**
The syntax ``"${myfiles[@]}"`` is extremely important. It works just like ``"$@"`` does for the positional parameters: it expands to a list of words, with each array element as one word, no matter what it contains. Even if there are spaces, tabs, newlines, quotation marks, or any other kind of characters in one of the array elements, it'll still be passed along as one word to whichever command we're running.

```bash
# FOR LOOP
for file in "${myfiles[@]}"; do
    cp "$file" /backups/
done
# SINGLE LINE
for i in "${arr[@]}"; do echo $i; done
# STRAIGHT COPY
myfiles=(db.sql home.tbz2 etc.tbz2)
cp "${myfiles[@]}" /backups/

# POS IN ARRAY
names=("Bob" "Peter" "$USER" "Big Bad John")        # Create an array
declare -p names                                    # Print contents of a variable with the type

echo "The first name is: ${names[0]}"               # Access 1st item in the array
echo "The second name is: ${names[1]}"              # Access 2nd item in the array
```
## Heredoc
```bash
cat > hello.py << EOF
#!/usr/bin/env python
from __future__ import print_function
import sys
print("#stdout", file=sys.stdout)
print("#stderr", file=sys.stderr)
for line in sys.stdin:
    print(line, file=sys.stdout)
EOF

# PREVENT VARIABLE EXPANSION
cat << 'EOF' > /tmp/yourfilehere
The variable $FOO will not be interpreted.
EOF
```

## Subshell
A subshell is a child process that inherits more than a normal external command does. It can see all the variables of your script, not just the ones that have been exported to the environment.
**To force a command to run in subshell use parentheses** `()`
```bash
foo=old
(foo=bar)
echo "$foo"                # Output: old

(cd /foo || exit 1; tar ...)
```

## Debugging
```bash
bash -x ./mybrokenscript

#!/bin/bash -x
[.. script ..]

#!/usr/bin/env bash
set -x
```

Add set -x somewhere in your code to turn on this mode for only a specific block of your code:
```bash
#!/usr/bin/env bash
[..irrelevant code..]
set -x
[..relevant code..]
set +x
[..irrelevant code..]
```
