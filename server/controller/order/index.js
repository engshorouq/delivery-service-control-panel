const express = require('express');
const { updateOrder } = require('./updateOrder');
const { getOrders } = require('../order/getOrders');
const { deleteOrder } = require('./deleteOrder');
const { postOrder } = require('./postOrder');
const { getnewOrders } = require('./getnewOrders');

const { updateStatus } = require('./editStatus');

const router = express.Router();

router.get('/viewOrders', getOrders);
router.route('/viewnewOrders').get(getnewOrders);
router.route('/putStatus/:key')
  .put(updateStatus);

router.route('/deleteOrder/:id')
  .delete(deleteOrder);
router.route('/addOrder')
  .post(postOrder);

router.put('/editOrder/:id', updateOrder);

module.exports = router;
