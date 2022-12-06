const express=require("express");
const router=express.Router();
const {addpost,delpost,getpost}= require("../controllers/post");
const {verifytoken}=require("../verifytoken")


router.post("/post",verifytoken,addpost);
router.get("/get",getpost);
router.delete("/delete/:postId",verifytoken,delpost)

module.exports=router

