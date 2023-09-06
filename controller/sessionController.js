const UserModel = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

// const jwt = require("jsonwebtoken")
const {SEC_KEY} = process.env;
//signup 

module.exports.signup =  async function(req,res){
    
    let email = req.body.email
    let emailUser = await UserModel.findOne({email:email})
    if(emailUser == null)
    {

      let pass = req.body.password;
      let enpass = bcrypt.hashSync(pass,10);
      console.log("encrypted = ",enpass);
      req.body.password = enpass; 
  
      let user = new UserModel(req.body) 
  
      let data = await user.save() 
  
       res.json({data:data,msg:"signup done",rcode:200})
    }else{
      res.json({msg:"You have already signed up , please login",rcode:-9})
    }
}


//login 
module.exports.login = async function(req,res){
    console.log(SEC_KEY);
  let email = req.body.email 
  let password = req.body.password 

  let user = await UserModel.findOne({email:email})
  
  if(user && bcrypt.compareSync(password,user.password)){
          //  token = jwt.sign({"authId":user._id},SEC_KEY,{expiresIn:"7d"})
          //  console.log("token "+token);
          token = jwt.sign({"authId":user._id},SEC_KEY,{expiresIn:"7d"})
           console.log("token "+token);
          //update
           res.json({data:user,msg:"Login done",token:token,rcode:200}) //
  }else{      
          res.json({data:req.body,msg:"Invalid Credentials",rcode:-9})
  } 
}

//getAllusers
module.exports.getAllUsers = function(req,res){
  UserModel.find().then(data=>{
    res.json({data:data,msg:"user retrived",rcode:200})
  })
}
