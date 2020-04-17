const connect = require('../../config/dbConnection');

const getCustomers = () => {
  const sql = 'SELECT * FROM tuser';
  return connect.query(sql);
};
module.exports = { getCustomers };
