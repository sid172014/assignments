const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const usernameStringSchema = zod.string().email();
    const passwordStringSchema = zod.string().refine((value) =>{
        if(value.length >= 6){
            return true;
        }
    }, {
        message : "Input must atleast contain 6 charecters"
    })
    try{
        if(usernameStringSchema.safeParse(username).error || passwordStringSchema.safeParse(password).error){
            throw new Error();
        }else{
            const jwtToken = jwt.sign({
                username
            },jwtPassword);
            return jwtToken;
        }
    }catch(e){
        return null;
    }
};



/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try{
        const verify = jwt.verify(token,jwtPassword);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decodedData = jwt.decode(token);
    if(!decodedData){
        return false;
    }
    return true;
};


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
