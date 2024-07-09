const userService = require('../Services/userService')
const jwtProvider = require('../Config/jsonwebtoken')
const bcrypt = require('bcrypt')



const register = async (req, res) => {
    try {

        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}


const login = async (req, res) => {
    let { email, password } = req.body;

    try {

        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: "User Not Found by email", email })
        }
        const ispassword = await bcrypt.compare(password, user.password);

        if (!ispassword) {
            return res.status(401).send({ message: "Password Not match", password })

        }


        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "Login Success" })

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}

module.exports = { register, login }