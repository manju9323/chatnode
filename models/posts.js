const mongoose=require("mongoose");

const Postschema=new mongoose.Schema({
     userId:{
        type:String,
        required:true,
     },
     imgUrl:{
        type:String,
    },
    subject:{
        type:String,
        required:false,
    },
},
{timestamps:true});



module.exports=mongoose.model("Post",Postschema) 