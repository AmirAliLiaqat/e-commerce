const Rating = require('../services/rating.service');
const productService = require('../services/product.service');

// create rating
async function createRating(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        product: product._id,
        user: user._id,
        rating: reqData.rating,
        createdAt: new Date(),
    });
    
    return await rating.save();
};

// get product all ratings
async function getProductRating(productId) {
    return await Rating.find({product: productId});
};

module.exports = { createRating, getProductRating };