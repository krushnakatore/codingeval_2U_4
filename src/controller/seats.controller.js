const express = require("express");

const Seats = require("../models/seats.model");

const Shows = require("../models/shows.model");


const router = express.Router();


//3.get/seats


router.post("/", async ( req, res) =>{
    try{
        const seats = await Seats.create(req.body); 
        
  
        return res.status(201).send({seats});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

router.get("/", async ( req, res) =>{
    try{
        const seats = await Seats.find()
        .populate({path:"show"})
        .lean().exec(); 
        
  
        return res.status(201).send({seats});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});


router.get("/available_seats", async ( req, res) =>{
    try{
        const seats = await Seats.find()
        .populate({path:"show"})
        .lean().exec(); 

        const shows = await Shows.find().lean().exec(); 

        console.log(seats[0].booked_seats,shows[0].total_seats)

        Avai_seats = shows[0].total_seats - seats[0].booked_seats;
        
  
        return res.status(201).send({Avai_seats});
  
    }catch(e){
  
      return res.status(500).json({status:"failed", message :e.message});
  
    }

});

module.exports = router;