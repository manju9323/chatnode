const Post=require("../models/posts");



const addpost=async(req,res)=>{
  try{
const mm=new Post({...req.body,userId:req.user._id})
const po = await mm.save()
res.status(200).json(po)
  }
  catch(err){
 console.log(err)
  }
}

const getpost=async(req,res)=>{
  try{
const post=await Post.find()
res.status(200).json(post)
  }
  catch(err){
 console.log(err)
  }
}

const delpost=async(req,res)=>{
  try{
   const post =await Post.findById(req.params.postId)

  if(req.user.admin || req.user._id===post.userId)
  {
   await Post.findByIdAndDelete(post._id)
res.status(200).json("sucessfully deleted")
  }
  else
  {
    res.status(500).send("you have no auth")
  }
  }
  catch(err){
    res.status(500).send("you have no auth")
 console.log(err)
  }
}


module.exports={addpost,delpost,getpost}