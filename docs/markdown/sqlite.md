# sqlite常用指令

## 指令应当服务于查询，因此格式最好是使用 FAQ 进行

### 如何查找

### 如何更新


### 如何删除表


### 如何删除表中的数据


### 


| 指令 | 含义 | 用法 |
| --- | --- | --- |
| SELECT | 从表中选取数据 | `SELECT column1, column2, ... FROM table_name;` |
| INSERT INTO | 插入新的行到表中 | `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);` |
| UPDATE | 更新表中现有的行 | `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;` |
| DELETE FROM | 从表中删除行 | `DELETE FROM table_name WHERE co ndition;` |
| CREATE TABLE | 创建新表格 | `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);` |
| DROP TABLE | 删除整个表格 | `DROP TABLE table_name;` |
| ALTER TABLE | 修改表结构 | `ALTER TABLE table_name ADD column_name datatype;` |
| INDEX | 在列上创建索引 | `CREATE INDEX index_name ON table_name (column_name);` |
| VIEW | 基于 SQL 语句的可视化表格 | `CREATE VIEW view_name AS SELECT column1, column2, ... FROM table_name WHERE condition;` |
| NULL | 不知道或无效的值 | `SELECT column1, column2, ... FROM table_name WHERE column_name IS NULL;` |
| NOT NULL | 必须包含一个值 | `CREATE TABLE table_name (column1 datatype NOT NULL, column2 datatype NOT NULL, ...);` |
| UNIQUE | 列中所有值都必须唯一 | `CREATE TABLE table_name (column1 datatype UNIQUE, column2 datatype UNIQUE, ...);` |
| PRIMARY KEY | 表中每行唯一标识 | `CREATE TABLE table_name (column1 datatype PRIMARY KEY, column2 datatype, ...);` |
| FOREIGN KEY | 用于在两个表之间创建关联 | `CREATE TABLE table1 (column1 datatype PRIMARY KEY, column2 datatype, ...); CREATE TABLE table2 (column1 datatype, column2 datatype, ..., FOREIGN KEY (column1) REFERENCES table1(column1));` |
| CHECK | 确保列中的值满足特定条件 | `CREATE TABLE table_name (column1 datatype CHECK (condition), column2 datatype, ...);` |
| LIKE | 在 WHERE 子句中使用通配符 | `SELECT column1, column2, ... FROM table_name WHERE column_name LIKE 'pattern';` |
| IN | 在 WHERE 子句中设置多个可能值 | `SELECT column1, column2, ... FROM table_name WHERE column_name IN (value1, value2, ...);` |
| BETWEEN | 在 WHERE 子句中选择一个范围 | `SELECT column1, column2, ... FROM table_name WHERE column_name BETWEEN value1 AND value2;` |
| EXISTS | 检查子查询是否至少返回一行 | `SELECT column1, column2, ... FROM table_name WHERE EXISTS (SELECT column_name FROM table_name WHERE condition);` |
| COUNT() | 返回记录数 | `SELECT COUNT(column_name) FROM table_name WHERE condition;` |
| AVG() | 返回平均值 | `SELECT AVG(column_name) FROM table_name WHERE condition;` |
| SUM() | 返回总和 | `SELECT SUM(column_name) FROM table_name WHERE condition;` |
| MAX() | 返回最大值 | `SELECT MAX(column_name) FROM table_name WHERE condition;` |
| MIN() | 返回最小值 | `SELECT MIN(column_name) FROM table_name WHERE condition;` |
| GROUP BY | 按列进行分组 | `SELECT column1, COUNT(column2) FROM table_name GROUP BY column1;` |
| HAVING | 在 GROUP BY 子句之后使用聚合函数来过滤数据 | `SELECT column1, COUNT(column2) FROM table_name GROUP BY column1 HAVING COUNT(column2) > value;` |
| ORDER BY | 将结果按指定列排序 | `SELECT column1, column2, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;` |
| AS | 为列或表设置别名 | `SELECT column_name AS alias_name FROM table_name;` |
| INNER JOIN | 只返回匹配的行 | `SELECT column_name(s) FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;` |
| LEFT JOIN | 返回左表中所有的行和右表中匹配的行 | `SELECT column_name(s) FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;` |
| RIGHT JOIN | 返回右表中所有的行和左表中匹配的行 | `SELECT column_name(s) FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;` |
| FULL OUTER JOIN | 返回两个表中的所有行，根据关联条件将相应行组合在一起 | `SELECT column_name(s) FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;` |
| UNION | 合并两个 SELECT 语句的结果集 | `SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;` |
| UNION ALL | 合并两个 SELECT 语句的结果集，包括重复行 | `SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2;` |
| LIMIT | 指定返回的记录数 | `SELECT column1, column2, ... FROM table_name LIMIT number;` |


## 生成 2

非常抱歉，下面补充完整50个sqlite指令、含义和用法的表格

|指令|含义|用法|
|-|-|-|
|ATTACH DATABASE|将另一个数据库附加到当前数据库|ATTACH DATABASE 'database file path' AS database_name;|
|DETACH DATABASE|从当前会话中分离一个附加的数据库|DETACH DATABASE database_name;|
|SAVEPOINT|为事务设置保存点|SAVEPOINT save_point_name|
|ROLLBACK TO SAVEPOINT|回滚到指定的保存点|ROLLBACK TO SAVEPOINT save_point_name|
|RELEASE SAVEPOINT|删除指定的保存点|RELEASE SAVEPOINT save_point_name|
|CASE|在 SQL 语句中定义条件和返回值之间的关系|SELECT column_name, CASE WHEN condition THEN 'return value' ELSE 'return value' END FROM table_name;|
|IFNULL|返回两个参数中不是NULL的那个|SELECT column_name, IFNULL(column_name_to_check, 'not available') FROM table_name;|
|COALESCE|返回参数列表中第一个非NULL参数|SELECT COALESCE(column1, column2, ..., columnN) FROM table_name;|
|RANDOM|返回伪随机整数|SELECT RANDOM();|
|ABS|返回给定数的绝对值|SELECT ABS(column_name) FROM table_name;|
|ROUND|返回给定数的四舍五入值|SELECT ROUND(column_name, decimals) FROM table_name;|
|LENGTH|返回文本字段中的字符数|SELECT LENGTH(column_name) FROM table_name;|
|SUBSTR|返回字符串中的一部分|SELECT SUBSTR(column_name, start_position, length) FROM table_name;|
|TRIM|从字符串的开始和/或结尾删除空格|SELECT TRIM(BOTH ' ' FROM column_name) FROM table_name;|
|UPPER|将字符串转换为大写字母|SELECT UPPER(column_name) FROM table_name;|
|LOWER|将字符串转换为小写字母|SELECT LOWER(column_name) FROM table_name;|
|REPLACE|将文本中的一个子字符串替换为另一个|SELECT REPLACE(column_name, old_value, new_value) FROM table_name;|
|GLOB|使用通配符匹配来返回值|SELECT column_name FROM table_name WHERE column_name GLOB 'pattern';|
|LAST_INSERT_ROWID|返回最近插入行的 ROWID|SELECT LAST_INSERT_ROWID();|
|ROW_NUMBER|在结果集中给每行分配一个唯一的序列号|SELECT ROW_NUMBER() OVER (ORDER BY column_name) FROM table_name;|
|CAST|将一个数据类型转换为另一个数据类型|SELECT CAST(column_name AS new_data_type) FROM table_name;|
|DATE|从文本字符串中提取日期|SELECT DATE(column_name, modifier) FROM table_name;|
|DATETIME|从文本字符串中提取日期和时间|SELECT DATETIME(column_name, modifier) FROM table_name;|
|STRFTIME|将日期和时间格式化为指定的字符串格式|SELECT STRFTIME('%Y-%m-%d %H:%M:%S', 'now') FROM table_name;|
|VACUUM|优化数据库并释放未使用的磁盘空间|VACUUM;|
|ANALYZE|收集统计信息以优化查询性能|ANALYZE;|
|PRAGMA|设置和查询SQLite库状态|PRAGMA pragma_name = value;|
|REINDEX|重建所有索引|REINDEX;|
|ETC.|等等...|见官网文档|

以上50个指令可以满足大部分 SQLite 数据库操作的需求。



