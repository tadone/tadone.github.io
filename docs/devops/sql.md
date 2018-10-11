---
title: SQL Basics
---

# MySQL (MariaDB)
**Backup & Restore MySQL Database**
```sh
# Export:
mysqldump -u username –-password=your_password database_name > file.sql
# Import:
mysql -u username –-password=your_password database_name < file.sql
```
