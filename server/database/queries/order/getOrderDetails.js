const connection = require('../../config/dbConnection');

exports.getOrderDetails = id => connection.query('SELECT orders.pk_i_id,orders.o_price as price,orders.pay as pay, orders.i_status as b_status ,orders.product_name as product_name, orders.dt_create_at as date FROM orders inner join TUser_order on TUser_order.order_id = orders.pk_i_id inner join tuser on tuser_order.tuser_id = tuser.pk_i_id where orders.pk_i_id=$1', [id]);
