const Message=require("../models/message");


//post new conv
 
const addmessage=async(req,res)=>{
  const newmessage=new Message(req.body);
  try{
    const savemessage=await newmessage.save();
    res.status(200).json(savemessage)
  }
  catch(err){
    res.status(500).json(err)
  }
} 



const getmessage=async(req,res)=>{
try{
  const message=await Message.find({
    conversationId:req.params.conversationId,
  })
  res.status(200).json(message);
}
catch(err){
res.ststus(500).json(err)
}
}

module.exports={addmessage,getmessage}