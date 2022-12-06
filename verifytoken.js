const {createError}=require("./error")
const jwt =require("jsonwebtoken");
require('dotenv').config();

exports.verifytoken=async(req,res,next)=>{
  let token=req.header("mmm")
  jwt.verify(token,process.env.secure,(err,user)=>{
 if(err){
  return next(createError(401,"token is not valid"))
 } 
 else{
  req.user=user;
  next()
 }
  })
}







