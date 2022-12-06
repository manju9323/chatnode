const express=require("express")
//const jwt =require("jsonwebtoken");
const cors=require('cors')
const {connect}=require('./dbconnect');
const conversation=require('./route/conversation')
const message=require('./route/message')
const auth=require('./route/auth')
const user=require("./route/user")
const post=require("./route/posts")
const app=express(); 

app.set("view engine","ejs");
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})) 


app.get("/mmm",(req,res)=>{res.send("good")})
app.use("/api/auth",auth)
app.use("/api/conversation",conversation)
app.use("/api/message",message)   
app.use("/api/user",user)
app.use("/api/post",post)
  
   
app.use((err,req,res,next)=>{ 
  const status = err.status ||500;
  const message = err.message || "something Wrong"
  res.status(status).json({sucess:false,status:message})
})



   
app.listen(8000,(req,res)=>{
  connect()
    console.log("backend connected")
})   
      