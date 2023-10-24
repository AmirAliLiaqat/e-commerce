const jwt = require('jsonwebtoken');

const SECRET_KEY = 'kmkjifmjmidivjmhhicjmgsicgsigcshgjfjcaiomopf';

// generate token
const generateToken = (userId) => {
    const token = jwt.sign({userId}, SECRET_KEY, {expiresIn: '48h'});
    return token;
};

// get user id from token
const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };