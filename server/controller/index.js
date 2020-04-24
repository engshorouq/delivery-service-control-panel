require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const productHandler = require('./product');


const { getImage } = require('./getImage');
const PlaceHandler = require('./place');
const { getStores } = require('./stores/index');
const { checkCookie } = require('./checkCookie');


const router = express.Router();
router.use(productHandler);
router.get('/session/value', (req, res, next) => {
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

router.use(checkAuth);
// all routes start from here
router.route('/checkCookie')
  .get(checkCookie);

router.use(adminHandler);

router.use(protectRoutes);
// protected routes start from here
router.route('/counts')
  .get(getCounts);

router.get('/getStores', getStores);

router.use(customerHandler);
router.use(orderHandler);

router.use(PlaceHandler);
router.route('/image/:name')
  .get(getImage);

module.exports = router;
