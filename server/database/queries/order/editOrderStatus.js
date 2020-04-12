const connection = require('../../config/dbConnection');

const editStatus = (newstatus, key) => connection.query('UPDATE orders SET i_status = $1 WHERE pk_i_id = $2', [newstatus, key]);

module.exports = { editStatus };
