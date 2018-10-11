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
### Popular RDBMS
**MySQL/MariaDB**  
Enterprises can start out using the free community server and later upgrade to the commercial version.  

**PostgreSQL**  
A particularly scalable object-relational database

**SQLite**  
SQLite is an amazing library that gets embedded inside the application that makes use of. A self-contained server-less database engine with no external dependencies, used in iPhones, Firefox browsers and Skype.
No configuration or admin tasks needed. The entire DB is stored in one disk file which can grow to 7TB.

SQLite's Supported **Data Types**:
- NULL: NULL value.
- INTEGER: Signed integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.
- REAL: Floating point value, stored as an 8-byte IEEE floating point number.
- TEXT: Text string, stored using the database encoding (UTF-8, UTF-16BE or UTF-16LE).
- BLOB: A blob of data, stored exactly as it was input.

## NoSQL
NoSQL stands for **Not Only SQL**
* **Data models:** A NoSQL database lets you build an application without having to define the schema first unlike relational databases which make you define your schema before you can add any data to the system.
* **Data structure:** Relational databases were built in an era where data was fairly structured and clearly defined by their relationships. NoSQL databases are designed to handle unstructured data (e.g., texts, social media posts, video, email)
* **Scaling:** It’s much cheaper to scale a NoSQL database than a relational database because you can add capacity by scaling out over cheap, commodity servers.
* **Development model:** NoSQL databases are open source whereas relational databases typically are closed source with licensing fees baked into the use of their software.  

**NoSQL** Database Management Systems:
- Key / Value Based: Redis, Memcached (caching)
- Column Based: Cassandra (large size)
- Document Based: CouchDB, MongoDB (Nested JSON, complex data structure)
- Graph Based

**When To Use NoSQL Databases**
- Size
- Speed
- Scheema-Free Design

### Popular NoSQL DBMS
**MongoDB**
The most popular NoSQL DB; nevertheless retains some SQL properties like query and index

**Cassandra**
Highly available NoSQL alternative to MongoDB. Useful for storing particularly large datasets with a user-friendly interface.

# Cloud Based SQL
