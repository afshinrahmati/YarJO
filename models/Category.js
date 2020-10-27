 const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Category = new Schema({
    id: {
        type: Number,
        default:1,
        unique: true,
        integer: true
    },
    name:{
        type:String
    },
    parentId:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});






module.exports = mongoose.model("Category", Category, "Category");

