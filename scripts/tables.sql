
create table listings (
	listing_id SERIAL PRIMARY KEY,
	listing_name text,
	listing_description text
);

create table images (
	listing_id SERIAL references listings(listing_id),
	image_url text
);

create table reservations (
	listing_id SERIAL NOT NULL references listings,
	in_date date NOT NULL,
	email text NOT NULL,
	guest_name text,
	PRIMARY KEY(listing_id, in_date)
);


INSERT INTO listings (listing_name, listing_description) VALUES ('Listing 1', 'Description for listing 1');
INSERT INTO listings (listing_name, listing_description) VALUES ('Listing 2', 'Description for listing 2');
INSERT INTO listings (listing_name, listing_description) VALUES ('Listing 3', 'Description for listing 3');
INSERT INTO listings (listing_name, listing_description) VALUES ('Listing 4', 'Description for listing 4');


INSERT INTO images (listing_id, image_url) VALUES (1, 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg');
INSERT INTO images (listing_id, image_url) VALUES (2, 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg');
INSERT INTO images (listing_id, image_url) VALUES (3, 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg');
INSERT INTO images (listing_id, image_url) VALUES (4, 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg');

INSERT INTO reservations (listing_id, in_date, email, guest_name) VALUES (1, '2022-05-26', 'rama.t99@gmail.com', 'Rama Tanikella');
INSERT INTO reservations (listing_id, in_date, email, guest_name) VALUES (2, '2022-05-26', 'rama.t99@gmail.com', 'Rama Tanikella');
INSERT INTO reservations (listing_id, in_date, email, guest_name) VALUES (3, '2022-05-26', 'rama.t99@gmail.com', 'Rama Tanikella');
INSERT INTO reservations (listing_id, in_date, email, guest_name) VALUES (4, '2022-05-26', 'rama.t99@gmail.com', 'Rama Tanikella');




select * from availability;

INSERT INTO messages (appointment_id, messg) VALUES (1,'Hi, how are you?');
select * from messages

INSERT INTO appointment_info (appointment_id, first_name, last_name, phone_number, email, description) VALUES (1, 'Govinda', 'Tanikella', '2018445598', 'govinda.tanikella@gmail.com', 'Sameer broke da car');
select * from appointment_info





