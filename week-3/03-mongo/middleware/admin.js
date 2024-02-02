// Middleware for handling author

const {Admin} = require('../db');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{    
        const findAdmin = await Admin.findOne({
            username : req.headers.username
        });
        if(!findAdmin){
            throw new Error("User does not exists");
        }
        if(findAdmin.password != req.headers.password){
            throw new Error("Password is incorrect");
        }
        next();
    }catch(e){
        res.status(404).send(e.message);
    }
};

module.exports = adminMiddleware;