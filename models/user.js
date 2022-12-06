const mongoose=require("mongoose");

const Userschema=new mongoose.Schema({
     email:{
        type:String,
        required:true,
        unique:true
     },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
    },
    from:{
        type:String,
    },
    desc:{
        type:String,
    },
    relationship:{
        type:Number,
    },
    profilepicture:{
        type:String
    },
    coverpicture:{
        type:String
    },
    followers:{
        type:[String],
    },
    followings:{
        type:[String],
    },
    isAdmin:{
        type:Boolean, 
        default:false,  
    },
    username:{
        type:String,
        unique:true,
    }
},
{timestamps:true});



module.exports=mongoose.model("UsersChat",Userschema)