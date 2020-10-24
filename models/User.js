const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Users = new Schema({
   mobile:{
        type:String,    
   },
   roles: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
],
password:{
    type:String
},
    createdAt: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('User', Users);
