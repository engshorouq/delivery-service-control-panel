const connection = require('../../config/dbConnection');

exports.postOrderr = (pay, price, quntity) => connection.query('INSERT INTO orders(pay,o_price,product_name) VALUES ($1 ,$2, $3) RETURNING pk_i_id', [pay, price, quntity]);
