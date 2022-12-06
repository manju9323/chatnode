const express=require("express");
const router=express.Router();
const {addmessage,getmessage}= require("../controllers/message");



router.post("/add",addmessage)
router.get("/get/:conversationId",getmessage)

module.exports=router