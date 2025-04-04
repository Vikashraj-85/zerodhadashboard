const express=require('express');
const router=express.Router();
const controllerHolding=require('../controller/holding');
const {auth}=require('../middleware/auth')

router.get('/',controllerHolding.allHoldings)
router.get('/delete',auth,controllerHolding.deleteholding)

module.exports=router;