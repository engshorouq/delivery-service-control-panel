
const { postCustomer } = require('../../database/queries/customer/addCustomer');
const { postOrderr } = require('../../database/queries/order/postOreder');
const { insertTuserOrder } = require('../../database/queries/customer/insertTuserOrder');

const postOrder = (req, res) => {
  const {
    e,
    phone,
    address,
    name,
    price,
    quntity,
  } = req.body;
  let pay;
  if (e === 3) {
    pay = 'عند الإستلام';
  } else {
    pay = 'دفع إلكتروني';
  }

  let orderId;
  let cusId;

  postCustomer(name, phone, address)
    .then(({ rows }) => {
      cusId = rows[0].pk_i_id;
      return postOrderr(pay, price, quntity);
    })
    .then(({ rows }) => {
      orderId = rows[0].pk_i_id;
      return insertTuserOrder(cusId, orderId);
    })
    .then(() => {
      res.status(201).send({ result: 'done' });
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};

module.exports = { postOrder };
