const userModel = require('../Models/user');
const jwt = require('jsonwebtoken');

module.exports.auth = async (req, res, next) => {

    const token = req.cookies.token;
   
        if(!token){
            return res.json({message:'no token found'})
        }else{
            try{
                console.log(token);
                const decode = jwt.verify(token, process.env.TOKEN_KEY);
                console.log("decode", decode)
                req.user=await userModel.findById(decode.userId)
                console.log("the user is",req.user);
                next();
            }catch (err) {
                res.staus(500).json({ message: 'Internal server error' })
            }
        }

    } 
