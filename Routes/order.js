const express=require('express');
const router=express.Router();
const controllerOrder=require('../controller/order');

router.post('/newOrder',controllerOrder.saveNewOrder)
router.post('/sellorder',controllerOrder.sellOrder)

module.exports=router;