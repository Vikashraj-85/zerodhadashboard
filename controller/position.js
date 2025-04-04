const positioModel= require('../Models/positions')

module.exports.allHoldings=async(req, res) => {

    let Allpositions=await positioModel.find({})
    res.status(200).json({data:Allpositions})    
   
}