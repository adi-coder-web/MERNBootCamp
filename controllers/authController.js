const User=require('../models/user')
const { body, validationResult,check } = require('express-validator');

exports.signup=(req,res)=>{
  //putting validations
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }
  //--------------------
  
    const user=new User(req.body)
    user.save((err,user)=>{
       if(err){
        return res.status(400).json({
            err:err
        })
       }      
       res.json({
           data:{user}
       }) 
    })
}

exports.signout=(req,res)=>{
    res.json({
        message:"signout works"
    })
}
