const cartItemService = require('../services/cartItem.service');

// update cart item
const updateCartItem = async (req, res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);

        return res.status(200).send(updatedCartItem);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

// remove cart item
const removeCartItem = async (req, res) => {
    const user = req.user;
    try {
        await cartItemService.removeCartItem(user._id, req.params.id);

        return res.status(200).send('cart item removed successfully');
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { updateCartItem, removeCartItem };