const express = require("express");

const User = require("../models/user.model");



const upload = require("../middlewares/upload");

const router = express.Router();


router.post("/single", upload.single("profile_photo_url") ,async ( req, res) =>{
    try{
        const user = await User.create({
          //   id:req.body.id,
            name : req.body.name,
            email :req.body.email,
            password : req.body.password,
            profile_photo_url:req.file.path,
            roles:req.body.roles,
        });
  
        return res.status(201).send({user});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message})
  
    }
  
  
  });

  module.exports = router;