CREATE DATABASE restaurants;

CREATE TABLE restaurants(
    restaurant_id bigserial PRIMARY KEY,
    restaurant_name text not null,
    restaurant_img text not null,
    restaurant_category int not null
);

CREATE TABLE menu(
    menu_id bigserial PRIMARY KEY,
    menu_name text not null,
    menu_price bigint not null,
    menu_img text not null,
    restaurant_id int not null REFERENCES restaurants(restaurant_id)
);

--ALL
SELECT
    *
FROM
    restaurants;

---- By CATEGORY
SELECT
    *
FROM
    restaurants
WHERE
    restaurant_category = $ 1;

---MENU
SELECT
    *
FROM
    menu
WHERE
    restaurant_id = $1;

---
SELECT
    *
FROM
    menu
WHERE
    menu_id = $1;