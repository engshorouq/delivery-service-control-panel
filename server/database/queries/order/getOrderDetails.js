const connection = require('../../config/dbConnection');

exports.getOrderDetails = (id, type, typePage) => {
  if (typePage === 'customer') { return connection.query('select json_agg((items.pk_i_id, items.s_name, items.f_price)) as items_names, tuser.s_name as name, orders.s_customer_phone as phone, orders.s_customer_address as address, places.s_name as place_name, sum(items.f_price) as total, orders.dt_create_at as date, case when orders.i_status = 1 then \'تم\' else \'قيد التنفيذ\' end as status from items inner join orders on orders.pk_i_id=items.fk_i_order_id inner join tuser_order ON tuser_order.order_id = orders.pk_i_id inner join tuser ON tuser.pk_i_id = tuser_order.tuser_id inner join places ON places.pk_i_id = orders.fk_i_place_id where orders.pk_i_id=$1 and tuser.i_type = $2 group by tuser.s_name, places.s_name, orders.s_customer_phone, orders.s_customer_address, orders.dt_create_at, orders.i_status', [id, type]); }
  return connection.query('select json_agg((items.pk_i_id, items.s_name, items.f_price)) as items_names, COALESCE(orders.customer_name, (select tuser.s_name from tuser inner join tuser_order ON tuser_order.tuser_id = tuser.pk_i_id inner join orders ON orders.pk_i_id = tuser_order.order_id where orders.pk_i_id = $1 and tuser.i_type = $2 )) as name, COALESCE(orders.s_customer_phone, (select tuser.s_mobile_number from tuser inner join tuser_order ON tuser_order.tuser_id = tuser.pk_i_id inner join orders ON orders.pk_i_id = tuser_order.order_id where orders.pk_i_id = $1 and tuser.i_type = $2 )) as phone,  COALESCE(orders.s_customer_address, (select tuser.s_address from tuser inner join tuser_order ON tuser_order.tuser_id = tuser.pk_i_id inner join orders ON orders.pk_i_id = tuser_order.order_id where orders.pk_i_id = $1 and tuser.i_type = $2 )) as address, places.s_name as place_name, sum(items.f_price) as total, orders.dt_create_at as date, case when orders.i_status = 1 then \'تم\' else \'قيد التنفيذ\' end as status from items inner join orders on orders.pk_i_id=items.fk_i_order_id inner join places ON places.pk_i_id = orders.fk_i_place_id where orders.pk_i_id=$1 group by places.s_name, orders.s_customer_phone, orders.s_customer_address, orders.dt_create_at, orders.i_status, orders.customer_name, orders.s_customer_address, orders.s_customer_phone', [id, type]);
};