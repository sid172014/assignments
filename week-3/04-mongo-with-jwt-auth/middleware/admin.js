// Middleware for handling auth
const jwt = require('jsonwebtoken');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const splittedToken = token.split(" "); // Seperating the total token i.e the Bearer token by using the space ' ' delimitter
    const verifiedValue = jwt.verify(splittedToken[1], 'jwtsecret'); 
    
    try{
        if(!verifiedValue.username){
            throw new Error("Token cannot be verified");
        }
        next();
    }catch(e){
        res.status(404).send(e.message);
    }
}

module.exports = adminMiddleware;