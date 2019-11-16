const Joi = require('@hapi/joi');

exports.schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(/^\+?[0-9]{12}$/).required(),
  address: Joi.string().required(),
  password: Joi.string().required(),
  status: Joi.boolean().required(),
});
