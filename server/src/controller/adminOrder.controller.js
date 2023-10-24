const orderService = require('../services/order.service');

// get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// get all confirmed orders
const confirmedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// get all shipped orders
const shippOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// get all delivered orders
const deliverOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// get all cancelled orders
const cancelOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// get all deleted orders
const deleteOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { getAllOrders, confirmedOrders, shippOrders, deliverOrders, cancelOrders, deleteOrders };