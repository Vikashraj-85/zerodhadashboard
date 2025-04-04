const express=require('express');
const router=express.Router();
const controllerPosition=require('../controller/position');

router.get('/',controllerPosition.allHoldings)

module.exports=router;