const express=require("express");
const router=express.Router();
const {getuser,getfriends}= require("../controllers/user");



//router.post("/add",addmessage)
router.get("/get",getuser)
router.get("/friends/:userId",getfriends)

module.exports=router