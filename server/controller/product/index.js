const express = require('express');
const { getProducts } = require('./getProducts');
const { getProductDetalis } = require('./getProductDetails');
const { reduceOne } = require('./reduceOne');
const { removeProduct } = require('./removeProduct');
const { checkoutForm } = require('./checkout_form');
const { redirectCheckout } = require('./redirect_checkout');
const { getProductCart } = require('./getProductCart');
const { postOrder } = require('./postOrder');

const router = express.Router();

router.get('/products', getProducts);
router.route('/products/detalis/:productId')
  .get(getProductDetalis);
router.route('/reduce/:id')
  .get(reduceOne);
router.route('/remove/:id')
  .get(removeProduct);
router.route('/checkout-form')
  .post(checkoutForm);
router.route('/redirect-checkout-form')
  .post(redirectCheckout);
router.route('/products/addToCart/:prodId')
  .get(getProductCart);
router.route('/addOrder/')
  .post(postOrder);

module.exports = router;
