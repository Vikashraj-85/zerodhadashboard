const holdingModel = require('../Models/holdings')


module.exports.allHoldings=async(req, res) => {

    let AllHoldings=await holdingModel.find({})
    res.status(200).json({data:AllHoldings})    
   
}

module.exports.deleteholding=async(req,res)=>{
    res.send('deleted successfully');
}