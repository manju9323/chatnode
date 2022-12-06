const UsersChat=require("../models/user");


//get user 

getuser=async(req,res)=>{
  const userId=req.query.userId;
  const username=req.query.username;
  try{
    const user =userId
    ? await UsersChat.findById(userId)
    : await UsersChat.findOne({username:username});
    const {password,...other}=user._doc;
    res.status(200).json(other)
  }
  catch(err){
    res.status(500).json(err);
  }
}   

//get friends
 getfriends=async (req, res) => {
  try {
    const user = await UsersChat.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return UsersChat.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports={getuser,getfriends} 