const orderService = require('../services/order.service');

// create order
const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// find order by id
const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        let findOrder = await orderService.findOrderById(req.params.id);
        return res.status(200).send(findOrder);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// order history
const orderHistory = async (req, res) => {
    const user = req.user;
    try {
        let orderHistory = await orderService.usersOrderHistory(user._id);
        return res.status(200).send(orderHistory);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { createOrder, findOrderById, orderHistory };