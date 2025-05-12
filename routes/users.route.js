const express=require('express');
const {getAllusers,login,register}=require("../controllers/user.controllers");
const { auth } = require('../middlewarws/auth');
const userRouter=express.Router(); 

userRouter.get('/',auth,getAllusers)
userRouter.get('/login',login)
userRouter.post('/register',register)
module.exports=userRouter;
