const express = require('express');
const { notFound } = require('./notFound');
const { serverError } = require('./serverError');

const router = express.Router();
router.use(notFound);
router.use(serverError);


module.exports = router;
