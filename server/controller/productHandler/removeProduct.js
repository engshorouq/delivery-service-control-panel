const Cart = require('./cart');

module.exports = (req, res) => {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;


  if (!req.session.cart) {
    res.send({
      value: null,

    });
  }
  res.send({
    value: res.locals.session.cart,
  });
};
