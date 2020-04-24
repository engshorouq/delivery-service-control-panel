const getProductDetalisQuery = require('../../database/queries/products/getProductDetalis');

const getProductDetalis = (req, res, next) => {
  const { productId } = req.params;


  getProductDetalisQuery(productId)
    .then((response) => {
      res.send({
        error: null,
        data: response.rows,
      });
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = { getProductDetalis };
