const express = require("express");

const Screens = require("../models/screens.model");



const router = express.Router();


//3.get/seats


router.post("/", async ( req, res) =>{
    try{
        const screens = await Screens.create(req.body); 
        
  
        return res.status(201).send({screens});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

router.get("/", async ( req, res) =>{
    try{
        const screens = await Screens.find()
        .populate({path:"theatre_id"})
        .lean().exec(); 
        
  
        return res.status(201).send({screens});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


module.exports = router;