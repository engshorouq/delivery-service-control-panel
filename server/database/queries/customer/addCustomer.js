const connection = require('../../config/dbConnection');

exports.postCustomer = (name, phone, address) => connection.query('INSERT INTO Tuser(s_name,s_mobile_number,s_address) VALUES ($1 ,$2, $3) RETURNING pk_i_id', [name, phone, address]);
