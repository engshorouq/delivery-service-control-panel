const https = require('https');
const querystring = require('querystring');

function request(id, callback) {
  let path = `/v1/checkouts/${id}/payment`;
  path += '?entityId=8a8294174d0595bb014d05d82e5b01d2';
  const options = {
    port: 443,
    host: 'test.oppwa.com',
    path,
    method: 'GET',
    headers: {
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
  postRequest.end();
}

exports.redirectCheckout = async (req, res, next) => {
  const { id } = req.body;
  request(id, (responseData) => {
    // save ya nariman here to databasse resultDetails&card
    console.log(responseData, 'mor');
    if (responseData.result.code == '000.100.110') {
      // empity session
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
};
