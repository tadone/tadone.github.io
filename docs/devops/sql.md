---
title: SQL Basics
---

# MySQL (MariaDB)
## Access
- `mysql -u root -p"some-password-here"` to enter mysql prompt
- `mysql -u root -p"some-password-here" -e "SHOW DATABASES;"` to list databases
- mysql: `SHOW DATABASES;` from the mysql prompt

## Backup & Restore
- `mysqldump -u username –-password=your_password database_name > file.sql` to backup database
- `mysql -u username –-password=your_password database_name < file.sql` to restore database

# Postgres
## Access
- `su - postgres` or `psql --username=postgres`: login as postgres
- `\list` or `\l`: list all databases
- `\dt`: list all tables in the current database

## Backup
- `pg_dump dbname > dbname.bak` to backup "dbname" database
  - There are several options for the backup format:
    - *.bak: compressed binary format
    - *.sql: plaintext dump
    - *.tar: tarball

## Restore
- `dropdb dbname` to delete a database
- `createdb dbname` to create a database
- `psql dbname < dbname.bak` to restore from backup