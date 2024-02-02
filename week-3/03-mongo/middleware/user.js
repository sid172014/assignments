const {User} = require('../db');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const findUser = await User.findOne({
            username : req.headers.username
        });
        if(!findUser){
            throw new Error("The user does not exists");
        }
        if(findUser.password != req.headers.password){
            throw new Error("The password for the given username is wrong");
        }
        req.user = findUser;
        next();
    }catch(e){
        res.send(e.message);
    }
}

module.exports = userMiddleware;