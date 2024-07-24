const { check, validationResult } = require("express-validator");

const validatorCreateProduct = [
  check("name").exists().notEmpty(),
  check("category").exists().notEmpty(),
  check("price").exists().notEmpty(),
  check("image").exists().notEmpty(),
  (request, response, next) => {
    try {
        validationResult(request).throw()
        return next()
    } catch (error) {
        response.status(403).send({ errors : error.array()})
    }
  },
];

module.exports = { validatorCreateProduct }