-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS targets;

-- CREATE YOUR DATABASE
CREATE DATABASE targets;

\c targets;
DROP TABLE IF EXISTS products;

-- CREATE YOUR TABLES
CREATE TABLE products (
id serial,
name varchar(30),
product_id integer
);
-- ADD RECORDS TO YOUR TABLE