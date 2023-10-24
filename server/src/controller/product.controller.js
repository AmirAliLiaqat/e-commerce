const productService = require('../services/product.service');

// create product
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// delete product
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// update product
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// find product by id
const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// find all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// create multiple products only for admin
const createMultipleProducts = async (req, res) => {
    try {
        const products = await productService.createMultipleProduct(req.body);
        return res.status(201).send({message: 'Products Created Successfully'});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleProducts };