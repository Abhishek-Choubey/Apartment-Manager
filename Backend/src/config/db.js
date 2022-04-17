const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect("mongodb+srv://Abhishek:Abhishek@cluster0.bfcjm.mongodb.net/ApartmentManager?retryWrites=true&w=majority");
}