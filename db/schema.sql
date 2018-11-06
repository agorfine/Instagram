\c finstadb;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  full_name TEXT,
  phone VARCHAR(50),
  bio VARCHAR(255),
  profpic_url VARCHAR(255)
);

DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  caption VARCHAR(255)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS likes;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL
);
