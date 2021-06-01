-- Intro to SQL Homework
-- 1. Create Database
-- Create a database, call it restaurant. In your terminal:

-- createdb restaurant

-- 2. Create Database Table
-- Write a database schema: create a restaurant.sql file, in it write a CREATE TABLE statement to create a table called restaurant. This table will contain the following information, you will use the appropriate data types to represent the info. Please use an auto-incrementing primary key ID:

-- name
-- distance (in miles from HeadQuarters)
-- stars
-- category (type of food)
-- favorite dish
-- does takeout?
-- last time you ate there

-- CREATE TABLE restaurant (
--     name varchar,
--     distance integer,
--     stars integer,
--     catergory char(10),
--     favorite_dish varchar,
--     does_takeout boolean,
--     last_time_eaten varchar
-- );

-- 3. Run your file one of two ways
-- Copy the "CREATE TABLE" statement and paste it into the PostgreSQL shell
-- psql restaurant -f restaurant.sql
-- If the table has been created successfully, you should see "CREATE TABLE" being printed. You can also describe the table schema in the shell using the \d command:

-- restaurant=# \d restaurant

-- 4. Insert Data
-- Write INSERT statements to enter data into the restaurant table. 
-- You can paste the statements into the psql shell.

-- INSERT INTO restaurant VALUES 
-- ('Jason Deli', 18, 4.5, 'Sandwiches', 'Rueben THE Great', TRUE, '3 months'),
-- ('The Goat', 25, 4.3, 'Pub Fare', 'Baja Chicken', TRUE, '2 months'),
-- ('Fulin', 60, 4, 'Asian', 'Dragon Roll', TRUE, '4 months'),
-- ('Taziki', 32, 4.5, 'Greek', 'The Gyro', TRUE, '5 months'),
-- ('Burger Republic', 78, 4.5, 'Burgers', 'The Taco Truck', TRUE, '6 months');

-- 5. Writing Queries
-- Write queries to get

-- The names of the restaurants that you gave a 5 stars to
-- The favorite dishes of all 5-star restaurants
-- The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
-- restaurants in the category of 'BBQ'
-- restaurants that do take out
-- restaurants that do take out and is in the category of 'BBQ'
-- restaurants within 2 miles
-- restaurants you haven't ate at in the last week
-- restaurants you haven't ate at in the last week and has 5 stars

SELECT * from restaurant WHERE stars >= 5;

SELECT favorite_dish from restaurant WHERE stars >= 5;

-- ALTER TABLE restaurant
-- ADD id SERIAL PRIMARY KEY;

SELECT id from restaurant where name = 'Burger Republic';

SELECT name from restaurant where category = 'Greek';

SELECT name from restaurant where does_takeout = TRUE;

SELECT name from restaurant WHERE category = 'Asian';

SELECT name from restaurant WHERE distance < 20;

SELECT name from restaurant WHERE last_time_eaten < '3 month';

SELECT name from restaurant WHERE stars >= 5 AND last_time_eaten < '3 month' ;

-- 6. Aggregation and Sorting Queries
-- list restaurants by the closest distance.
-- list the top 2 restaurants by distance.
-- list the top 2 restaurants by stars.
-- list the top 2 restaurants by stars where the distance is less than 2 miles.
-- count the number of restaurants in the db.
-- count the number of restaurants by category.
-- get the average stars per restaurant by category.
-- get the max stars of a restaurant by category.

SELECT * FROM restaurant ORDER BY distance;

SELECT * FROM restaurant ORDER BY distance LIMIT 2;

SELECT * FROM restaurant WHERE distance < 40 ORDER BY stars desc LIMIT 2;

SELECT COUNT(*) FROM restaurant;

SELECT COUNT(category) FROM restaurant;


SELECT AVG(stars) FROM restaurant;

SELECT MAX(stars) FROM restaurant WHERE category = 'Pub Fare';