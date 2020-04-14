const getnewOrdersQuery = require('../../database/queries/order/getnewOrders');

const getnewOrders = (req, res) => {
  getnewOrdersQuery()
    .then((response) => {
      if (response) {
        res.status(200).send(response);
      } else {
        res.status(204).send('No orders yet');
      }
    })
    .catch((e) => {
      console.log(55, e, 22);

      res.status(500).send('Internal server error.');
    });
};

module.exports = { getnewOrders };