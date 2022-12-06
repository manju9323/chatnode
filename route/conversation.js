const express=require("express");
const router=express.Router();
const {conversation,getconv,getconvtwo}= require("../controllers/conversation");



router.post("/add",conversation)
router.get("/get/:userId",getconv)
router.post("/get/two",getconvtwo)
module.exports=router 