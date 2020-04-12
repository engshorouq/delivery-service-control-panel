const { countCustomers } = require('../database/queries/customer/getCustomersCount');
const { countOrders } = require('../database/queries/order/getOrdersCount');

exports.getCounts = (req, res) => {
  const result = {};
  countCustomers()
    .then(({ rows }) => {
      result.customers = rows[0].count;
    })
    .then(countOrders)
    .then(({ rows }) => {
      result.orders = rows[0].count;
      res.send({ result });
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};
