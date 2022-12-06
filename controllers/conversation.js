const Conversation=require("../models/conversation");


//new conv
 
const conversation=async(req,res)=>{
  const newconversation=new Conversation({
    members:[req.body.senderId,req.body.receiverId]
  });
  try{
    const saveconversation=await newconversation.save();
    res.status(200).json(saveconversation)
  }
  catch(err){
    res.status(500).json(err)
  }
}



const getconv=async(req,res)=>{
try{
  const conversation=await Conversation.find({
    members:{$in:[req.params.userId]},
  })
  res.status(200).json(conversation);
}
catch(err){
res.ststus(500).json(err)
}
}




//two id

const getconvtwo=async(req,res)=>{
try{
  const con=await Conversation.findOne({
    members:{$all:[req.body.firstuserId,req.body.seconduserId]}
  })
   if(!con)
   {
    const newconversation=new Conversation({
      members:[req.body.firstuserId,req.body.seconduserId]
    });
    try{
      const saveconversation=await newconversation.save();
      res.status(200).send("sucessfully create conversation")
    }
    catch(err){
      res.status(500).json(err)
    }
   }
  res.status(200).send("already you have coversation")  
}
catch(err){
  console.log(err) 
}   
}            

module.exports={conversation,getconv,getconvtwo}


 










