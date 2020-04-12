const connection = require('../../config/dbConnection');

exports.getOrderCustomerId = id => connection.query('SELECT TUser.pk_i_id FROM tuser inner join tuser_order ON tuser_order.tuser_id = tuser.pk_i_id inner join orders ON orders.pk_i_id = tuser_order.order_id where orders.pk_i_id=$1', [id]);
