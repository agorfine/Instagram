\c finstadb;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  full_name TEXT(50),
  phone INT(50),
  bio VARCHAR(255),
  profpic
);

CREATE TABLE If NOT EXISTS pictures (
  id SERIAL PRIMARY KEY,
  user_id INT,
  datetime DATETIME,
  img BLOB,
)

CREATE TABLE If NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  picture_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL,
)
