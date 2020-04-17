BEGIN;

    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    role TEXT NOT NULL,
    user_name TEXT NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE TUser
(
    pk_i_id SERIAL PRIMARY KEY,
    s_name TEXT NOT NULL,
    s_mobile_number TEXT NOT NULL,
    b_status BOOLEAN NOT NULL DEFAULT true,
    s_address TEXT NOT NULL,
    s_image TEXT DEFAULT 'user.png',
    dt_create_at DATE DEFAULT current_date
);

CREATE TABLE orders
(
    pk_i_id SERIAL PRIMARY KEY,
    dt_create_at DATE DEFAULT current_date,
    product_name TEXT,
    i_status INTEGER DEFAULT 2,--0 INPROGRESS 1 DONE
    o_price FLOAT

);


CREATE TABLE TUser_order
(
    id SERIAL PRIMARY KEY,
    tuser_id INTEGER REFERENCES TUser(pk_i_id) on delete cascade,
    order_id INTEGER REFERENCES orders(pk_i_id) on delete cascade
);

COMMIT;