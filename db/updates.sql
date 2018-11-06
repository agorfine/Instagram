\c finstadb

ALTER TABLE pictures ADD COLUMN caption VARCHAR(255);

UPDATE pictures SET img_url = 'https://imgur.com/s8TVefK' WHERE img_url = 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449794/Screenshot_20181105-152932_Instagram.jpg'
