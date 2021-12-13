const express = require("express");

const Theatre = require("../models/theatre.model");



const router = express.Router();


//3.get/seats


router.post("/", async ( req, res) =>{
    try{
        const theatre = await Theatre.create(req.body); 
        
  
        return res.status(201).send({theatre});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

router.get("/", async ( req, res) =>{
    try{
        const theatre = await Theatre.find().lean().exec(); 
        
  
        return res.status(201).send({theatre});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


module.exports = router;