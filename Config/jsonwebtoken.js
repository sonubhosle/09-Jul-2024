const jwt = require('jsonwebtoken')


const generateToken = (userId) =>{
    return jwt.sign({userId},process.env.JWT_TOKEN,{expiresIn:'48h'});
};


const getUserFromToken = (token) =>{
    const decodedToken = jwt.verify(token,process.env.JWT_TOKEN);
    return decodedToken.userId;
}



module.exports = {generateToken,getUserFromToken}