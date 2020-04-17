const connection = require('../../config/dbConnection');

const getProductDetalis = productId => connection.query('select * from products where products.id=$1', [productId]);

module.exports = { getProductDetalis };
