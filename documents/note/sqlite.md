---
title: "Introduction to SQLite3"
excerpt: "Dives into SQLite3 commands and basic queries"
date: 1707091200000
tags: ['SQLite']
---

### Commands in SQLite3 CLI
1. `.help`: For usage hints
2. `.tables`: Show existing tables
3. `.quit`: Exit from sqlite shell
4. `.save <table_name> | <dn_name>`
5. `.header on`: Shows header name along with the data when showing result while querying
6. `.schema`: Shows the schema of the tables in the database or `.schema <table_name>` for a specific table
### How to open a connection with the database?

```bash
sqlite3 <db_name>.(db | sqlite)
```

### How to create table?
```sql
CREATE TABLE <table_name>(var1 INT PRIMARY KEY, var2 TEXT NOT NULL);
```

### How to insert data in a table?
```sql
--For inserting against each avriable
INSERT INTO <table_name>(var1, var2) VALUES(1, "item1");

--For inserting for all variables
INSERT INTO <table_name> VALUES(1, "item2");
```
### How to query the entire table?

```sql
SELECT * FROM <table_name>
```

### How to query data using `WHERE` clause?
```sql
--Querying using one condtion
SELECT * FROM <table_name> WHERE var1 = 1; // item1

--Querying using more than 1 condition so both satisfies
SELECT * FROM <table_name> WHERE var1 = 1 and var2 = "item1";

--Querying using more than 1 condition so either satisfies
SELECT * FROM <table_name> WHERE var1 = 1 or var2 = "item2";

--Querying using range, 0 and 100
SELECT * FROM <table_name> WHERE <column_name> BETWEEN 0 and 100;

--Querying data so either satisfies
SELECT <column_name> FROM <table_name> WHERE <column_name> IN(0, 100)
```

### How to query data using `GROUP BY` clause?
```sql
--Grouping var1
SELECT * FROM <table_name> GROUP BY var1;

--Grouping a value by no of times we encounter
SELECT <column_name>, COUNT(<column_name>) from <table_name> GROUP BY <column_name>;
```

### How to query data using `ORDER BY` clause?
```sql
--Ordering using value within column name, either in ascending(default)/descending
SELECT * FROM <table_name> ORDER BY <column_name> DESC|ASC;
```

### How to update data?
```sql
UPDATE <table_name> SET var1 = 5 WHERE var2 = "item2" and var1 = 1;

--Update data in multiple rows, use singlequote to set value while updating
UPDATE <table_name> SET var = 75 WHERE var2 in ("item2", "item3", "item4" ....);

UPDATE <table_name> SET var = 1, var2 = "item5" WHERE var3 = "UPDATE"
```

### How to drop a table?
```sql
--Permanently deletes the table
DROP TABLE <table_name>;
```

### How to delete row(s) from a table?
```sql
--Delete a specific row using where clause
DELETE * FROM <table_name> WHERE var1=1;

--Same as above, preferred
DELETE FROM <table_name> WHERE var1=1;

--Delete all the rows/records in a table
DELETE FROM <table_name>;
```

### How to set default values while creating a table for columns?
```sql
CREATE TABLE <table_name>(
	id INTEGER,
	created_at DATETIME DEFAULT (unixepoch(CURRENT_TIMESTAMP))),
	updated_at INTEGER DEFAULT (strftime('%s', 'now')),
	deleted_at DATETIME DEFAULT (unixepoch('now'))),
VALUES();
```

### How to insert a row to a table with default column values?
```sql
-- Do not include 
INSERT INTO <table_name>(id) VALUES(420);
```

### How to rename table name?
```sql
ALTER TABLE <table_name> RENAME TO <new_table_name>;
```

### How to add columns to existing table and with default value?
```sql
ALTER TABLE <table_name> ADD <column_name> TEXT DEFAULT ('');
```
### Datatypes in SQLite
1. NULL: NULL value
2. INTEGER: Signed integer stored in 0,1,2,3,4,6 or 8 bytes depending on the magnitude of the value
3. REAL: Floating point value stored as an 8-byte IEEE floating point number
4. TEXT: Text string stored using the database encoding (UTF-8, UTF-16BE or UTF-16LE)
5. BLOB: Blob of data, stored exactly as it was input

### Constraints in SQLite
1. NOT NULL
2. CHECK
3. UNIQUE
4. PRIMARY KEY
5. FOREIGN KEY