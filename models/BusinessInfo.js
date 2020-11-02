const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BusinessInfos = new Schema({
    UserId: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
        ,
    Logo:{
       type:String,
       required:true
        },

    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },  
    Title:{
        type:String,
        required:true
    },
    Domain:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
       
    }
    ,
    Brand:{
        type:String
    }
    ,
    Activity:{
        type:String,
        required:true
    }
    ,
    SabtNo:{
        type:String,
        required:true
    }
    ,
    MelliNo:{
        type:String,
        required:true
    }
    ,
    Type:{
        type:String,
        required:true
    }
    ,
    CEO:{
        type:String,
        required:true
    }
    ,
    StartDate:{
        type:String,
        required:true
    }
    ,
    Description:{
        type:String,
        required:true
    }
          

});

module.exports =  mongoose.model('BusinessInfo', BusinessInfos);

