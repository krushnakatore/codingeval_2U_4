const express = require("express");

const Shows = require("../models/shows.model");



const router = express.Router();


//2.get/shows


router.post("/", async ( req, res) =>{
    try{
        const shows = await Shows.create(req.body); 
        
  
        return res.status(201).send({shows});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

router.get("/", async ( req, res) =>{
    try{

    //    / console.log(req.params.id)
        const shows = await Shows.find()
        .populate({path:"movie_id"})
        .populate({path:"screen"})
        .lean().exec(); 
        
  
        return res.status(201).send({shows});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

router.get("/:id", async ( req, res) =>{
    try{

        // console.log(req.params.id)
       
        const shows = await Shows.find()
        .populate({path:"movie_id"})
        .populate({path:"screen"})
        .lean().exec(); 

        for(let i = 0; i < shows.length; i++){
            if(req.params.id === shows[i].movie_id.name){

                var a = shows[i]
                return res.status(201).send({a});
            }
        }
        
  
       
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


module.exports = router;