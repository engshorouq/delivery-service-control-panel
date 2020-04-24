const https = require('https');
const querystring = require('querystring');

const axios = require('axios');

exports.checkoutForm = async (req, res, next) => {
  console.log(4752)
  const { amount } = req.body;
  request(amount, (responseData) => {
    res.json({ success: true, id: responseData.id || '' });
  });
};
function request(amount, callback) {
  const path = '/v1/checkouts';
  const data = querystring.stringify({
    entityId: '8a8294174d0595bb014d05d82e5b01d2',
    amount,
    currency: 'EUR',
    paymentType: 'DB',
  });
  const options = {
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
  const postRequest = https.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      jsonRes = JSON.parse(chunk);
      return callback(jsonRes);
    });
  });
  postRequest.write(data);
  postRequest.end();
}
