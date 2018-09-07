Linux Metrics
===
---
## CPU Load

**Uptime Load Averges**
The sum of _number of processes_ that are currently running plus the number that are _waiting_.On multi-processor system, the load is relative to the number of processor cores available. The “100% utilization” mark is 1.00 on a single-core system, 2.00, on a dual-core, 4.00 on a quad-core, etc.

```bash
uptime                          # Display load averages in 1, 5, 15 minutes based on number of cores/processors
```
Good Article explaining this: http://blog.scoutapp.com/articles/2009/07/31/understanding-load-averages

**top**

* Physical memory usage stats:
    ```bash
    Mem:   4051792k total,  4026104k used,    25688k free,   359168k buffers
    ```
    Memory stats line gives you a summary of how much physical memory you have on your system, and how much of it is currently used or available for the use.
    Modern Linux systems are buffering quite a lot for improved performance, which means you rarely get to see all your physical RAM free – the more your system stays up and running, the more of its recently used data ends up being buffered.


* CPU(s) status
    ```bash
    Cpu(s):  0.6%us,  0.5%sy,  0.0%ni, 97.3%id,  1.6%wa,  0.0%hi,  0.0%si,  0.0%st
    ```
    Current CPU state, averaged for the number of CPUs installed in your system
    ``us`` – User CPU time. The time the CPU has spent running users’ processes with default priorities
    ``sy`` – System CPU time. The time the CPU has spent running the kernel and its processes
    ``ni`` – Nice CPU time. The time the CPU has spent running users’ proccess that have been prioritized up using nice command
    ``id`` – Idle CPU time
    ``wa`` – I/O wait. Amount of time the CPU has been waiting for I/O operations to complete
    ``hi`` – Hardware IRQ. The amount of time the CPU has been servicing hardware interrupts
    ``si`` – Software Interrupts. The amount of time the CPU has been servicing software interrupts
    ``st`` – Steal Time. The amount of CPU ’stolen’ from this virtual machine by the hypervisor for other tasks (such as running another virtual machine)

* List of the tasks (processes) running on your system
    ```bash
    PID  USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
    7629 greys     20   0  749m 291m  28m S    1  7.4  16:51.40 firefox
    ```
    ``PID`` – process ID
    ``USER`` – username for the owner of each process
    ``PR`` – process priority (RT means a Real Time priority class – used for system processes)
    ``NI`` – priority set by nice utility
    ``VIRT`` – the amount of virtual memory used by a process: code, data and shared libraries plus pages that have been swapped out
    ``RES`` – the resident part of a process – how much of it resides in the physical memory (non-swapped memory)
    ``SHR`` – shows you the size of potentially shared memory segments for a process
    ``S`` – the current state of each process
    ``%CPU`` – percentage of the time shares CPU spends running a particular process
    ``%MEM`` – percentage of the physical memory of your system which is used by each process
    ``%TIME+`` – total time CPUs spent running each process
    ``COMMAND`` – a command used to initiate each process.

---
## Disk Usage

**df**
```bash
df -hT           # Show info on file system -h human readable and -T type of file system
```

**du**
```bash
du -Sh /home | sort -rh | head -5       # Display the largest folders/files including the sub-directories
# Perl hack: To display large files with stars
du -k | sort -rn | head -10 | perl -ne 'if ( /^(\d+)\s+(.*$)/){$l=log($1+.1);$m=int($l/log(1024)); printf  ("%6.1f\t%s\t%25s  %s\n",($1/(2**(10*$m))),(("K","M","G","T","P")[$m]),"*"x (1.5*$l),$2);}'
```
**find**
Find file over certain size
```bash
find /home -type f -size +10000k -exec ls -lh {} \; | awk '{ print $5 ": " $9 }' | sort -nr | head -10
```
---

## Memory

**free**
Show available memory. Modern Linux use cache and buffering to improve performance. Linux counts cached RAM, Buffered RAM to used RAM.
```bash
free -wh
              total        used        free      shared     buffers       cache   available
Mem:            15G        7.7G        4.8G        154M        484M        2.6G        7.3G
Swap:          7.9G          0B        7.9G

```

## Network

```bash
netstat -tulpn                      # Find services listening
netstat -tulpn | grep :80           # Find services listening on a port 80
fuser 7000/tcp                      # Find out the processes PID that opened tcp port 7000
```