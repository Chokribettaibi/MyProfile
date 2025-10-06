
# 00:00 Introduction

# 01:20 History of Unix/Linux

# 29:55 Linux Distributions

# 48:45 Installation

# 56:17 Basic Commands
# 01:29:07 Text Files
# 01:42:55 Unix Philosophy

# 02:06:53 More on Text Files
# 02:09:45 Terminal vs Shell
# 02:37:36 Shell Expansion

# 02:34:12 Shell Variables

> Declaration d'un variable sur le terminal

``` bash
var1=10
echo $var1
10

var3=$[1 + 2]
echo $var3
3

var4=$(date)
echo $var4
Wed Mar 13 11:30:41 PM CDT 2024

echo $USER
chokri-nasser

echo $?
0

popo commande errer
echo $?
127

```

chane de commande
exemple:

``` bash
echo $var1; echo $?
10
0

set 
tout les variabel

set | grep var*

ps

PID TTY          TIME CMD
    9265 pts/0    00:00:00 bash
   11310 pts/0    00:00:00 ps

bash

ps

PID TTY          TIME CMD
   9265 pts/0    00:00:00 bash
  11479 pts/0    00:00:00 bash
  11621 pts/0    00:00:00 ps

```

variable de `bash1` defirant `bash2`

`export var1` var1 global variabl

``` bash
var1=4
var2=5
echo $var1 + $var2
4 + 5

echo $(($var1 + $var2))
9

declare -i num1
declare -i num2
num1=4
num2=$num1*5
echo $num2
20

```

expr

``` bash
expr 1 + 2
3
expr 3 / 4
0
expr 3 \* 4
12
expr 3 \> 2
1

bc
4 * 5
20
quit

```

login ssh
password

```bas
echo $0
-bash 
```

nn login ssh

```bas
echo $0
bash 
```

# 03:07:32 Pipes, Filters and Redirection

token

# 03:24:55 grep command

`grep ff00 /etc/hosts` :input: line content "ff00",
`grep ff00 -l /etc/hosts` :input: plasse folder,
`grep ff00 -n /etc/hosts` :input: number of line content "ff00"

> filter file
exemple file plus grande

`cat /var/log/syslog` => system log file.
>donc problem de rite
alor on etulise le  commande `head`

`head /var/log/syslog` => 10 prime line
`head -n 5 /var/log/syslog` => 5 prime line
`tail /var/log/syslog`
existe autre comend `wc` worde conter.

``` bash
wc /etc/hosts
9 25 219 /etc/hosts
```

explication
exlication
9p: line,
25: word,
219: character

``` bash
wc -l /etc/hosts
9 /etc/hosts
```

``` bash
wc -w /etc/hosts
25 /etc/hosts
```

``` bash
wc -c /etc/hosts
219 /etc/hosts
```

Pipeng: '|'
`head -n 50 /var/log/syslog | grep Inserted`
explication: chercher 'Inserted' don 50 premier line

```bash
echo "This is a test 123 !"  | tr -d 's'
Thi i a tet 123 !
```

`echo "Tis is a test 123 !" | tr [i] [I]`standar autput:=> `ThIs Is a test 123 !`

`echo "Tis is a test 123 !" | tr -s 's` => suprmer repetion de s

`echo "Tis is a test 123 !" | tr [a-z][A-Z]`:=>`THIS IS A TEST 123 !`

`echo "Tis is a test 123 !" | tr -d [:digt:]`=>`This is a  !`

`echo "Tis is a test 123 !" | tr [:digt:] 'z'`=>`This is a test zzz !`

[:lower:][ :upper:]

# 03:41:41 tr and cut commands

# 03:50:38 User and Group Management

# 04:40:35 File Management
# 04:58:53 Filesystem Hierarchy # Specifications (FHS)
# 05:26:11 File types, head, tail, more, # less, mkdir, rmdir, rm
# 05:36:34 Finding files
# 05:48:39 File Archive and Compression

# 06:04:33 File Ownership and Permissions

# 06:34:38 Managing Linux Processes

# 07:20:10 Package Management

# 08:07:20 Connecting to Remote Servers # (ssh, wget, curl, etc.)

# 09:21:50 Introduction to Shell Scripts

# 11:18:20 Last Words