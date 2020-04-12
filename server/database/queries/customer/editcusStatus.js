const connection = require('../../config/dbConnection');

const editcusStatus = (newstatus, cusid) => connection.query('UPDATE TUser SET b_status = $1 WHERE pk_i_id = $2', [newstatus, cusid]);

module.exports = { editcusStatus };
