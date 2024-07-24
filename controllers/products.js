const { Products } = require("../models/index");

const getProducts = (request, response) => {
  try {
    Products.getAll()
      .then((data) => {
        response.status(200).send(data[0]);
      })
      .catch((error) => response.status(400).send({ mg: error }));
  } catch (error) {
    response.status(500).send({ msg: error });
  }
};

const createProduct = (request, response) => {
  try {
    const { name, category, price, image } = request.body;
    const product = new Products(name, category, price, image);
    product
      .create()
      .then((data) => response.status(201).send({ data: product }))
      .catch((error) => response.status(400).send({ msg: error }));
  } catch (error) {
    response.status(500).send({ msg: error });
  }
};

const getOneProduct = (request, response) => {
  try {
    const { id } = request.params;
    Products.getById(id)
      .then(([[data]]) => response.status(200).send(data))
      .catch((error) => response.status(400).send({ msg: error }));
  } catch (error) {
    response.status(500).send({ msg: error });
  }
};

const deleteProduct = (request, response) => {
  try {
    const { id } = request.params;
    Products.getById(id)
      .then(([[data]]) => {
        if (!data) {
          response.status(404).send({ msg: "product not found" });
        } else {
          Products.delete(id)
            .then(() => {
              response.status(200).send({ msg: "product deleted" });
            })
            .catch((error) => {
              response.status(400).send({ msg: error });
            });
        }
      })
      .catch((error) => {
        response.status(400).send({ msg: error });
      });
  } catch (error) {
    response.status(500).send(error);
  }
};

const updateProduct = (request, response) => {
  try {
    const { id } = request.params;
    Products.getById(id)
      .then(([[data]]) => {
        if (!data) {
          response.status(404).send({ msg: "product not found" });
        } else {
          const { name, category, price, image } = request.body;
          const products = new Products(name, price, description, room);
          product
            .update(id)
            .then((data) => response.status(200).send(product))
            .catch((error) => {
              response.status(400).send({ msg: error });
            });
        }
      })
      .catch((error) => {
        response.status(400).send({ msg: error });
      });
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
