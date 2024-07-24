const express = require('express')
const router = express.Router()
const {getProducts, createProduct, getOneProduct, deleteProduct, updateProduct} = require('../controllers/products')
const { validatorCreateProduct } = require('../validators/products')

router.get('/', getProducts)
router.post('/', validatorCreateProduct, createProduct)
router.get('/:id', getOneProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', validatorCreateProduct, updateProduct)

module.exports = router