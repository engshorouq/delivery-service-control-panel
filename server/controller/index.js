require('dotenv').config();

const express = require('express');


const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const productHandler = require('./productHandler');
const errosHandler = require('./errorHandler');
const orderHandler = require('./order');
const { getImage } = require('./getImage');
const { checkCookie } = require('./checkCookie');


const router = express.Router();
router.use(checkAuth);
// all routes start from here
router.route('/checkCookie')
  .get(checkCookie);

router.use(adminHandler);

router.use(protectRoutes);
// protected routes start from here
router.route('/counts')
  .get(getCounts);
router.route('/session/value', (req, res, next) => {
  // req.session.cart = 0;
  if (!req.session.cart) {
    res.send({
      value: null,

    });
  }
  res.send({
    value: res.locals.session.cart,
  });
});
// was .get

router.use(customerHandler);
router.use(productHandler);
router.use(errosHandler);

router.use(orderHandler);
router.route('/image/:name')
  .get(getImage);

module.exports = router;
