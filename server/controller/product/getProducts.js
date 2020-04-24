const getProductsQuery = require('../../database/queries/products/getProducts');

const getProducts = (req, res, next) => {
  getProductsQuery()
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
      console.log('ya', err, 5);
      // next(err);
    });
};
module.exports = { getProducts };
