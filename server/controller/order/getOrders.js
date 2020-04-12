const getOrdersQuery = require('../../database/queries/order/getOrders');

const getOrders = (req, res) => {
  getOrdersQuery()
    .then((response) => {
      if (response) {
        res.status(200).send(response);
      } else {
        res.status(204).send('No orders yet');
      }
    })
    .catch(
      (e) => {
        console.log(78555, e, 22);
        res.status(500).send('Internal server error.');
      },
    );
};

module.exports = { getOrders };
