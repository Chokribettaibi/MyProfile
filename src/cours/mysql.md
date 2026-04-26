# mysql

install tools

```linux
sudo apt install apache2 php libapache2-mod-php mysql-server php-mysql


 sudo apt install php-curl php-gd php-intl php-json php-mbstring php-xml php-zip

  sudo apt install phpmyadmin

```

SQL = Structured Query Language                                    'The Language'

MySQL = Database System Same as [ MSSQL, Oracle ]  'DB System Or Software'

RDBMS = Relational Database Management System

MySQL Has Extensions To Connect To DB

PDO : Extebsion Connect To Database


> **mysql**: start
>
> show databases;
>
> `mysql -u root -pP0sswi0ed`, `-u` : user, `-p` : Password

```sql
show variables where variable_name = 'datadir';
```

Lancer XAMPP

```linux
sudo /opt/lampp/lampp start
```

Pour arrêter XAMPP

```linux
sudo /opt/lampp/lampp stop
```

> localition
> exemple :

| Variabel | Value          |
| -------- | -------------- |
| datadir  | /var/lib/mysql |

```sql
create database testdb;
```

> create data New database **testdb**

```sql
use testdb;
```
