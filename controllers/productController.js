const productModel = require('../models/productModel')

const getProducts = async (req, res) => {
    try {
        const products = await productModel.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const product = await productModel.createProduct(name);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getProductById = async (req, res) => {
    try {
        const product = await productModel.getProductById(req.params.id);
        if (!product) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProductById
}