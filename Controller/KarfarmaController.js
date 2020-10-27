const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

module.exports = new class Karfarma extends Controllr {

   async BusinessInfoGet(req,res,next){
       try {
        return res.render('panels/karfama/Business.ejs');
       } catch (error) {
           
       }
   }
   async BusinessInfoPost(req,res,next){
    try {
    console.log(req.body);
    } catch (error) {
        
    }
}
async BusinessInfoID(req,res,next){
    try {
        console.log(req.params);
    } catch (error) {
        
    }
}
}