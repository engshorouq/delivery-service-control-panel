// const connection = require('../../config/dbConnection');

// const getOrderDetails = id => connection
//   .query(
//     '
//     SELECT orders.o_price as price, orders.customer_name as customer, orders.i_status as b_status, orders.dt_create_at as date, tuser.s_mobile_number as phone, tuser.s_address as address FROM orders inner join places on places.pk_i_id = orders.fk_i_place_id inner join items on items.fk_i_order_id = orders.pk_i_id inner join TUser_order on TUser_order.order_id = orders.pk_i_id inner join tuser on tuser_order.tuser_id = tuser.pk_i_id
//     where orders.pk_i_id = $1', [id],
//   ).then((res) => {
//     // res.rows.forEach((e) => {
//     //   e.date = `${e.date.getFullYear()}-${e.date.getMonth() + 1}-${e.date.getDate()}`;
//     // });
//     // return res.rows;
//     console.log('ttttttttttttttttttttttttttt');
//   });

// module.exports = getOrderDetails;


const connection = require('../../config/dbConnection');

exports.getOrderDetails = id => connection.query('SELECT orders.pk_i_id,orders.o_price as price, orders.i_status as b_status ,orders.product_name as product_name, orders.dt_create_at as date FROM orders inner join TUser_order on TUser_order.order_id = orders.pk_i_id inner join tuser on tuser_order.tuser_id = tuser.pk_i_id where orders.pk_i_id=$1', [id]);
