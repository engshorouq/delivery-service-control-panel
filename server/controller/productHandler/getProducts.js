const { getProducts } = require('../../database/queries/products/index');

module.exports = (req, res, next) => {
  getProducts()
    .then((response) => {
      const productChunks = [];
      const products = response.rows;

      const chunkSize = 3;
      for (let i = 0; i < products.length; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
      }
      res.send({
        error: null,
        data: productChunks,
      });
    })
    .catch((err) => {
      next(err);
    });
};
