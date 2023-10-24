const Category = require('../models/category.model');
const Product = require('../models/product.model');

// create product
async function createProduct(reqData) {
    let topLevel = await Category.findOne({name: reqData.topLevelCategory});

    if(!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1,
        });
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory, 
        parentCategory: topLevel._id
    });

    if(!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2,
        });
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory, 
        parentCategory: secondLevel._id
    });

    if(!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3,
        });
    }

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountedPersent: reqData.discountedPersent,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes,
        quantity: reqData.quantity,
        category: thirdLevel._id,
    });

    return await product.save();
};

// delete product
async function deleteProduct(productId) {
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return 'Product deleted successfully';
};

// update product
async function updateProduct(productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData);
};

// find product by id
async function findProductById(productId) {
    const product = Product.findById(productId).populate('category').exec();

    if(!product) {
        throw new Error('Product not found with this id' + productId);
    }

    return product;
};

// get all products
async function getAllProducts(reqQuery) {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

    pageSize = pageSize || 10;

    let query = Product.find().populate('category');

    // find by category
    if(category) {
        const isExistCategory = await Category.findOne({name: category});

        if(isExistCategory) {
            query = query.where('category').equals(isExistCategory._id);
        } else {
            return { content: [], currentPage: 1, totalPages: 0 };
        }
    }

    // find by color
    if(color) {
        const colorSet = new Set(color.split(',').map(color => color.trim().toLowerCase()));

        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join('|', 'i')) : null;

        query = query.where('color').regex(colorRegex);
    }

    // find by size
    if(sizes) {
        const sizesSet = new Set(sizes);

        query = query.where('sizes.name').in([...sizesSet]);
    }

    // find by minPrice and maxPrice
    if(minPrice && maxPrice) {
        query = query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }

    // find by min dicount
    if(minDiscount) {
        query = query.where('discountPersent').gt(minDiscount);
    }

    // find by stock
    if(stock) {
        if(stock == 'in_stock') {
            query = query.where('quantity').gt(0);
        } else if(stock == 'out_of_stock') {
            query = query.where('quantity').gt(1);
        }
    }

    // find by sorting
    if(sort) {
        const sortDirection = sort === 'price_high' ? -1 : 1;
        query = query.sort({discountedPrice: sortDirection});
    }

    const totalProducts = await Product.countDocuments(query);
    
    const skip = (pageNumber - 1) * pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts / pageSize);

    return { content: products, currentPage: pageNumber, totalPages };
};

// create multiple products only for admin
async function createMultipleProduct(products) {
    for(let product of products) {
        await createProduct(product);
    }
};

module.exports = { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleProduct };