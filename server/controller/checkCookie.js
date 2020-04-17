exports.checkCookie = (req, res) => {
  if (req.payload) {
    console.log(7777);
    res.send({ result: true });
  } else {
    console.log(888888);

    res.send({ result: false });
  }
};
