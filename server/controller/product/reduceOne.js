const Cart = require('./cart');

const reduceOne = (req, res) => {
  const productId = req.params.id;


  const cart = new Cart(req.session.cart ? req.session.cart : {});


  cart.reduceByOne(productId);


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
module.exports = { reduceOne };
