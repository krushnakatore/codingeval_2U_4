const express = require("express");

const Movies = require("../models/movies.model");

const upload = require("../middlewares/upload");

const router = express.Router();


//1.post/movies


router.post("/",upload.single("poster_url"), async ( req, res) =>{
    try{
        const movies = await Movies.create({
            //   id:req.body.id,
              name : req.body.name,
              actors :req.body.actors,
              languages : req.body.languages,
              directors : req.body.directors,
              poster_url : req.file.path,
          });
        
  
        return res.status(201).send({movies});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


router.get("/", async ( req, res) =>{
    try{

        // console.log(req.params.id)

        const movies = await Movies.find().lean().exec(); 
        
  
        return res.status(201).send({movies});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


router.get("/:id", async ( req, res) =>{
    try{

        // console.log(req.params.id)
       
        const movies = await Movies.find().lean().exec(); 

        for(let i = 0; i < movies.length; i++){
            for(let j = 0; j < movies[i].actors.length; j++){
                if(req.params.id === movies[i].actors[j]){

                    var a = movies[i]
                    return res.status(201).send({a});
                }
            }
           
        }
        
  
       
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


module.exports = router;