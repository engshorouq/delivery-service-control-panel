
const { editStatus } = require('../../database/queries/order/editOrderStatus');
const { editcusStatus } = require('../../database/queries/customer/editcusStatus');

const { getOrderCustomerId } = require('../../database/queries/order/getOrderCustomerId');

const updateStatus = (req, res) => {
  const {
    e,
  } = req.body;
  const { key } = req.params;
  if (e == 0) {
    editStatus(e, key)
      .then(() => {
        res.status(202).send({ result: 'تم استلام الطلب بنجاح' });
      })
      .catch(() => {
        res.status(500).send({ error: 'Internal Server Error' });
      });
  }
  if (e == 1) {
    getOrderCustomerId(key)
      .then(({ rows }) => {
        const newstatus = false;
        const cusId = rows[0].pk_i_id;
        editStatus(e, key)
          .then(() => {
            editcusStatus(newstatus, cusId)
              .then(() => {
                res.status(202).send({ result: 'تم تحديد الطلب غير مستلم' });
              })
              .catch(() => {
                res.status(500).send({ error: 'Internal Server Error' });
              });
          })
          .catch(() => {
            res.status(500).send({ error: 'Internal Server Error' });
          });
      })
      .catch(() => {
        res.status(500).send({ error: 'Internal Server Error' });
      });
  } else if (e == 2) {
    res.status(404).send({
      error: 'حالة الطلب لا زالت جديد',
    });
  }
};

module.exports = { updateStatus };
