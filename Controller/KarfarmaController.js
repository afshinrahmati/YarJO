const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const categoriess = require('../models/Category');
const { body, validationResult } = require('express-validator');

module.exports = new class Karfarma extends Controllr {
// **********BuseniosInfoGet**********
   async BusinessInfoGet(req,res,next){
       try {
let categori = await categoriess.find({});

        return res.render('panels/karfama/Business.ejs',{categories:categori});
       } catch (error) {
           
       }
   }

   // **********BuseniosInfoPost**********
   async BusinessInfoPost(req,res,next){
    try {
    console.log(req.body);
    } catch (error) {
        
    }
}
    async CategoryId(req,res,next){
        try {
            let categori = await categoriess.find({parentId:req.params.id});
            console.log(categori);
            return res.status(200).send({
                "pardts": categori
            })
        } catch (error) {
            
        }
    }
}