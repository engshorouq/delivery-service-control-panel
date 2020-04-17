const express = require('express');
const { getProducts } = require('./getProducts');
const { getProductDetalis } = require('./getProductDetails');
const { reduceOne } = require('./reduceOne');
const { removeProduct } = require('./removeProduct');
const { checkoutForm } = require('./checkout_form');
const { redirectCheckout } = require('./redirect_checkout');
const { getProductCart } = require('./getProductCart');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/detalis/:productId', getProductDetalis);
router.get('/reduce/:id', reduceOne);
router.get('/remove/:id', removeProduct);
router.post('/checkout-form', checkoutForm);
router.post('/redirect-checkout-form', redirectCheckout);
router.get('/products/addToCart/:prodId', getProductCart);


module.exports = router;
