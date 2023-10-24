const User = require('../models/user.model');
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require('bcrypt');

// create user
const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({email});

        if(isUserExist) {
            throw new Error("user already exist with this email :", email );
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({firstName, lastName, email, password});

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
};

// find user by id
const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).populate('address');

        if(!user) {
            throw new Error("user not found with this id :", userId );
        }

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
};

// find user by email
const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error("user not found with this email :", email );
        }

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
};

// get user profile by jwt token
const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken();

        const user = await User.getUserById(userId);

        if(!user) {
            throw new Error("user not found with this id :", userId );
        }

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
};

// get all users
const getAllUsers = async () => {
    try {
        const users = await User.find();

        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createUser, getUserById, getUserByEmail, getUserProfileByToken, getAllUsers };