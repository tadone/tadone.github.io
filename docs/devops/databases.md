---
title: Database Technologies
---
# Database Technologies
---
## SQL - Relational Database
SQL has several very big advantages:
* Strong mathematical basis.
* Declarative syntax.
* A well-known language in Structured Query Language (SQL).

Relational databases require a single server to host your entire database. To scale, you need to buy a bigger, more expensive server.
#### MySQL/MariaDB
Enterprises can start out using the free community server and later upgrade to the commercial version.  
**Backup & Restore MySQL Database**
```bash
# Export:
mysqldump -u username –-password=your_password database_name > file.sql
# Import:
mysql -u username –-password=your_password database_name < file.sql
```
#### PostgreSQL
A particularly scalable object-relational database

#### SQLite
A self-contained server-less database engine with no external dependencies, used in iPhones, Firefox browsers and Skype.
No configuration or admin tasks needed. The entire DB is stored in one disk file which can grow to 7TB.

## NoSQL
NoSQL stands for **Not Only SQL**
* **Data models:** A NoSQL database lets you build an application without having to define the schema first unlike relational databases which make you define your schema before you can add any data to the system.
* **Data structure:** Relational databases were built in an era where data was fairly structured and clearly defined by their relationships. NoSQL databases are designed to handle unstructured data (e.g., texts, social media posts, video, email)
* **Scaling:** It’s much cheaper to scale a NoSQL database than a relational database because you can add capacity by scaling out over cheap, commodity servers.
* **Development model:** NoSQL databases are open source whereas relational databases typically are closed source with licensing fees baked into the use of their software.  

#### MongoDB
The most popular NoSQL DB; nevertheless retains some SQL properties like query and index

#### Cassandra
Highly available NoSQL alternative to MongoDB. Useful for storing particularly large datasets with a user-friendly interface.
