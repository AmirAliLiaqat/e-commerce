const jwtProvider = require('../config/jwtProvider');
const userService = require('../services/user.service');

// create function for authentication
const authenticate = async (req, res, next) => {
    try {
        const token = req.token.authorization?.split(" ")[1];
        
        if(!token) {
            return res.status(404).send({error: 'token not found...'});
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = userService.getUserById(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({error: error.message});
    }

    next();
};

module.exports = authenticate;