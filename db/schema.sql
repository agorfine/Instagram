\c finstadb;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  full_name TEXT,
  phone VARCHAR(50),
  bio VARCHAR(255),
  profpic_url VARCHAR(255)
);

CREATE TABLE If NOT EXISTS pictures (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  img_url VARCHAR(255) NOT NULL
);

CREATE TABLE If NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS likes (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL
);
