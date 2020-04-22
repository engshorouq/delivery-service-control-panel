const getnewOrdersQuery = require('../../database/queries/order/getnewOrders');
exports.getnewOrders = (req, res) => {
  console.log(888)
  getnewOrdersQuery()
    .then((response) => {
      console.log(57, response, 57);
      if (response) {
        res.status(200).send(response);
      } else {
        res.status(204).send('No orders yet');
      }
    })
    .catch((e) => {
      console.log(55, e, 55);

      res.status(500).send('Internal server error.');
    });
};

