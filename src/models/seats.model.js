const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema({
     booked_seats:{type:Number,required:true},
     show:{
         type:String,
         ref:"shows",
         required:true},
     
},  
     {
         versionKey:false,
         timestamps:true,
     },
     
)

const Seats = mongoose.model("seats",seatsSchema);

module.exports = Seats;