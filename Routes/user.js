const express=require('express');
const router=express.Router();
const controllerUser=require('../controller/user');

router.post('/signin',controllerUser.signin)
router.post('/login',controllerUser.login)
router.get('/logout',controllerUser.logout)

module.exports=router;