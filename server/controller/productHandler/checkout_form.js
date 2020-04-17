let https = require('https');
let querystring = require('querystring');

let axios = require('axios');

module.exports = async (req, res, next) => {
  const { amount } = req.body;
  request(amount, (responseData) => {
		// console.log(responseData.id);
		res.json({ success: true, id: responseData.id || '' });
	});
};
function request(amount, callback) {
  let path = '/v1/checkouts';
  let data = querystring.stringify({
    entityId: '8a8294174d0595bb014d05d82e5b01d2',
    amount: amount,
    currency: 'SAR',
    paymentType: 'DB',
  });
  let options = {
    port: 443,
    host: 'test.oppwa.com',
    path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length,
      Authorization: 'Bearer OGE4Mjk0MTc0ZDA1OTViYjAxNGQwNWQ4MjllNzAxZDF8OVRuSlBjMm45aA==',
    },
  };
  let postRequest = https.request(options, (res) => {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
  postRequest.write(data);
  postRequest.end();
}
