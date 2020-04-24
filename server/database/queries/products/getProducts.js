const connection = require('../../config/dbConnection');

const getProducts = () => connection.query('select * from products');

module.exports = getProducts;
