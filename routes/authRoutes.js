var express=require('express')
var router=express.Router()
const { check } = require('express-validator');

const {signout,signup}=require('../controllers/authController')

router.post('/signup', [
    check('name',"Name should be at least 3 char").isLength({min:3}),
    check('email',"Email is required").isEmail(),
    check("password","Password should be at least 3 char").isLength({min:3})
],  
signup);

router.get('/signout',signout)


module.exports=router;