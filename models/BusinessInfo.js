const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BusinessInfo = new Schema({
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
      type:String,
      required:true
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
        required:true
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

          

});


module.exports = mongoose.model('BusinessInfo', BusinessInfo);
