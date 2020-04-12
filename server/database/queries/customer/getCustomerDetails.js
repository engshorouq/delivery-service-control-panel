const connection = require('../../config/dbConnection');

exports.getDetails = id => connection.query('SELECT *, CASE WHEN b_status=true THEN \'مستلم/فعال\' else \'غير مستلم/غير فعال\' END AS status FROM TUser WHERE i_type = 2 AND pk_i_id = $1', [id]);
