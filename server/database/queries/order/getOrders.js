const connection = require('../../config/dbConnection');

const getOrdersQuery = () => connection
  .query(
    'SELECT orders.pk_i_id as key,orders.o_price as price,orders.product_name as quntity,orders.pay as pay, tuser.s_name as customer, orders.i_status as b_status , orders.dt_create_at as date,tuser.s_mobile_number as phone, tuser.s_address as address FROM orders inner join TUser_order on TUser_order.order_id = orders.pk_i_id inner join tuser on tuser_order.tuser_id = tuser.pk_i_id where orders.i_status!=2',

  ).then((res) => {
    res.rows.forEach((e) => {
      e.date = `${e.date.getFullYear()}-${e.date.getMonth() + 1}-${e.date.getDate()}`;
    });
    return res.rows;
  });

module.exports = getOrdersQuery;
