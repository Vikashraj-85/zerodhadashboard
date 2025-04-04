const userModel = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const cookieOptions = {
    httpOnly: true,
    secure: false,

}

module.exports.signin = async (req, res) => {
    try{

        let { username, password } = req.body;
        let hashPass = await bcrypt.hash(password, 12);
        let newUser = new userModel({
            username,
            password: hashPass,
        })
        await newUser.save();
        res.status(200).json({ message: 'signin successfully', data: newUser })
    }catch(err){
        res.staus(500).json({message:'Internal server error'})
    }
}

module.exports.login = async (req, res) => {
    try{

        let { username, password } = req.body;
        let isUserExit = await userModel.findOne({ username: username })
        console.log("this is iddd", isUserExit._id)
        if (isUserExit && await bcrypt.compare(password, isUserExit.password)) {
            const token = jwt.sign({ userId: isUserExit._id }, process.env.TOKEN_KEY);
            res.cookie("token", token, cookieOptions);
            return res.status(200).json({ message: 'login successfuly', data: isUserExit, token: token });
        }
        res.status(200).json({ message: 'invalid credentials', success: 'false' })
    }catch(err){
        res.staus(500).json({message:'Internal server error'})
    }


}

module.exports.logout=async(req,res)=>{
    res.clearCookie('token',cookieOptions).json({message:'Logout successfully'});
}