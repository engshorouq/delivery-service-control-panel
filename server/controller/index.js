require('dotenv').config();

const express = require('express');


const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const { getImage } = require('./getImage');
const PlaceHandler = require('./place');
const { getStores } = require('./stores/index');
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
router.get('/getStores', getStores);

router.use(customerHandler);
router.use(orderHandler);
router.use(PlaceHandler);
router.route('/image/:name')
  .get(getImage);

module.exports = router;
