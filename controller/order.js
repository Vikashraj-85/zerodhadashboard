const orderModel = require('../Models/ordder');
const holdingModel = require('../Models/holdings')

module.exports.saveNewOrder = async (req, res) => {


    let newOrder = new orderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    await newOrder.save();

    let isOrderExit = await holdingModel.findOne({ name: req.body.name });

    if (!isOrderExit) {
        let avg = req.body.price / req.body.qty;
        let myOrder = {
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            avg: avg,
            net: '-5.30%',
            day: '+4.56%'
        }
        let newHolding = new holdingModel(myOrder)
        return await newHolding.save();
    }
    let newPrice = parseInt(isOrderExit.price) + parseInt(req.body.price);
    let newQty = parseInt(isOrderExit.qty ) + parseInt(req.body.qty);
    let newAvg = parseInt(newPrice) / parseInt(newQty);

    let newUpdateHoldings = {
        name: req.body.name,
        price: newPrice,
        qty: newQty,
        avg: newAvg,
        net: isOrderExit.net,
        day: isOrderExit.day,
    }

    let updateHolding = await holdingModel.updateOne({ name: req.body.name }, newUpdateHoldings)
    res.status(200).json({ message: 'updated successfully', data: updateHolding });

}

module.exports.sellOrder=async(req,res)=>{
         res.send('sell')       
}