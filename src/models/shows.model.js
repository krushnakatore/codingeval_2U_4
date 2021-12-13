const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema({

     timing:{type:String, required:true},
     movie_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"movies", 
         required:true},
     total_seats:{type:Number, required:true},
     screen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screens",
        required:true},    
     
},  
     {
         versionKey:false,
         timestamps:true,
     },
     
)

const Shows = mongoose.model("shows",showsSchema);

module.exports = Shows;