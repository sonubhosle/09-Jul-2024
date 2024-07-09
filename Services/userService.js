const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwtprovider = require('../Config/jsonwebtoken')




const createUser = async (userData) => {
    try {

        let { firstName, lastName, password, email,mobile } = userData;

        const isUserexist = await User.findOne({ email });

        if (isUserexist) {
            throw new Error('User Already Exist', email)
        }

        password = await bcrypt.hash(password, 10);

        const user = await User.create({ firstName, lastName, email, password,mobile });


        return user;


    } catch (error) {
        throw new Error(error.message)
    }
}

const findUserById = async (userId) => {


    try {

        const user = await User.findById(userId)

        if (!user) {
            throw new Error('User Not Found', userId)
        }
        return user;
    } catch (error) {
        throw new Error(error.message)


    }

}


const findUserByEmail = async (email) => {

    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User Not Found related to this email', email)
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }

}


const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtprovider.getUserFromToken(token);

        const user = await findUserById(userId);

        if (!user) {
            console.log("user Not Found");
            throw new Error('User Not Found');
        }
        return user;

    } catch (error) {
        throw new Error(error.message)
    }
}


const getAllUsers = async () => {
    try {

        const users = await User.find();
        return users;

    } catch (error) {
        throw new Error(error.message)

    }
}


module.exports ={
    createUser,
    findUserById,
    findUserByEmail,
    getUserProfileByToken,
    getAllUsers
}