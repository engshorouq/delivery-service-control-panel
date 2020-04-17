const express = require('express');
const { getOrders } = require('../order/getOrders');
const { getnewOrders } = require('../order/getnewOrders');

const { deleteOrder } = require('./deleteOrder');
const { updateStatus } = require('./editStatus');


const router = express.Router();

router.get('/viewOrders', getOrders);
router.get('/viewnewOrders', getnewOrders);
router.route('/putStatus/:key')
  .put(updateStatus);

router.route('/deleteOrder/:id')
  .delete(deleteOrder);

module.exports = router;
