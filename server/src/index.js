const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Welcome to ecommerce api',
        status: true
    });
});

// getting auth routers
const authRouters = require('./routes/auth.route');
app.use('/auth', authRouters);

// getting user routers
const userRouters = require('./routes/user.route');
app.use('/users', userRouters);

// getting product routers
const productRouters = require('./routes/product.route');
app.use('/products', productRouters);

// getting admin product routers
const adminProductRouters = require('./routes/adminProduct.route');
app.use('/admin/products', adminProductRouters);

// getting order routers
const orderRouters = require('./routes/order.route');
app.use('/orders', orderRouters);

// getting admin order routers
const adminOrderRouters = require('./routes/adminOrder.route');
app.use('/admin/orders', adminOrderRouters);

// getting cart routers
const cartRouters = require('./routes/cart.route');
app.use('/cart', cartRouters);

// getting cart items routers
const cartItemRouters = require('./routes/cartItem.route');
app.use('/cart_items', cartItemRouters);

// getting review routers
const reviewRouters = require('./routes/review.route');
app.use('/reviews', reviewRouters);

// getting rating routers
const ratingRouters = require('./routes/rating.route');
app.use('/ratings', ratingRouters);

module.exports = app;