const path = require('path');
const { hashSync } = require('bcryptjs');

const joi = require('@hapi/joi');
const { editCaptain } = require('../../../database/queries/captain/editCaptain');
const { checkEmail } = require('../../../database/queries/captain/isCaptain');
const { editCaptainSchema } = require('../../utils/editCaptainSchema');


const updateCaptain = (req, res) => {
  if (req.files) {
    const { file } = req.files;
    const {
      name, email, phone, address, IDNumber, licenceNumber, status, password,
    } = req.body;
    const { id } = req.params;
    const extName = path.extname(file.name).slice(1);
    const newName = `${new Date().getTime()}id_photo.${extName}`;
    const { error } = joi.validate({ ...req.body }, editCaptainSchema);
    if (error) {
      res.status(404).send({
        error: 'captain dose not edit',
      });
    } else if (['png', 'jpg', 'jpeg'].some(ext => ext === extName)) {
      req.files.file.mv(path.join(__dirname, '..', '..', '..', 'upload', `${newName}`), (err) => {
        if (err) res.status(500).send({ error: 'Internal Server Error' });
        else {
          checkEmail(email)
            .then((result) => {
              if (!result.rows.length || result.rows[0].pk_i_id == id) {
                const captainInfo = {
                  name,
                  email,
                  phone,
                  address,
                  IDNumber,
                  licenceNumber,
                  status,
                  newName,
                };
                if (password !== 'undefined') {
                  const pass = hashSync(password, 5);
                  captainInfo.pass = pass;
                }
                editCaptain({ ...captainInfo }, id)
                  .then(({ rows: captain }) => {
                    if (!captain[0]) {
                      res.status(404).send({
                        error: 'captain dose not edit',
                      });
                    } else {
                      res.status(202).send({
                        result: captain,
                      });
                    }
                  })
                  .catch(() => {
                    res.status(500).send({ error: 'Internal Server Error' });
                  });
              } else {
                res.status(500).send({ error: 'هذا الايميل مستخدم مسبقاالرجاء المحاولة مرة أخرى' });
              }
            }).catch(() => {
              res.status(500).send({ error: 'Internal Server Error' });
            });
        }
      });
    }
  } else if (!req.files) {
    const {
      name, email, phone, address, IDNumber, licenceNumber, status, password, file,
    } = req.body;
    const extName = path.extname(file).slice(1);
    const { id } = req.params;
    const { error } = joi.validate({
      name, email, phone, address, IDNumber, licenceNumber, status, password,
    }, editCaptainSchema);
    if (error) {
      res.status(404).send({
        error: 'captain dose not edit',
      });
    } else if (['png', 'jpg', 'jpeg'].some(ext => ext === extName)) {
      checkEmail(email)
        .then((result) => {
          if (!result.rows.length || result.rows[0].pk_i_id == id) {
            const captainInfo = {
              name,
              email,
              phone,
              address,
              IDNumber,
              licenceNumber,
              status,
              newName: file,
            };
            if (password !== 'undefined') {
              const pass = hashSync(password, 5);
              captainInfo.pass = pass;
            }
            editCaptain({ ...captainInfo }, id)
              .then(({ rows: captain }) => {
                if (!captain[0]) {
                  res.status(404).send({
                    error: 'captain dose not edit',
                  });
                } else {
                  res.status(202).send({
                    result: captain,
                  });
                }
              })
              .catch(() => {
                res.status(500).send({ error: 'Internal Server Error' });
              });
          } else {
            res.status(500).send({ error: 'هذا الايميل مستخدم مسبقاالرجاء المحاولة مرة أخرى' });
          }
        }).catch(() => {
          res.status(500).send({ error: 'Internal Server Error' });
        });
    }
  } else {
    res.status(400).send({ error: 'Bad Request' });
  }
};

module.exports = { updateCaptain };
