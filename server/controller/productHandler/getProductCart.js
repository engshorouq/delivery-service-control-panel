const { getProductDetalis } = require('../../database/queries/products/index');
const Cart = require('./cart');

module.exports = (req, res, next) => {
  const { prodId } = req.params;
  const cart = new Cart(req.session.cart ? req.session.cart : {});

  getProductDetalis(prodId)
    .then((response) => {
      cart.add(response.rows, prodId);
      req.session.cart = cart;
      if (!req.session.cart) {
        res.send({
          value: null,

        });
      }

      res.send({

        value: res.locals.session.cart,
      });
    })
    .catch((err) => {
      next(err);
    });
};
