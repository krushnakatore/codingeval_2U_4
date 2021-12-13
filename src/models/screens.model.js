const mongoose = require("mongoose");

const screensSchema = new mongoose.Schema({

     name:{type:String, required:true},
     theatre_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"theatre", 
         required:true},
     
},  
     {
         versionKey:false,
         timestamps:true,
     },
     
)

const Screens = mongoose.model("screens",screensSchema);

module.exports = Screens;