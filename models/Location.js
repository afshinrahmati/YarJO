const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Location = new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    parent_id:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});






module.exports = mongoose.model("Location", Location, "Location");

