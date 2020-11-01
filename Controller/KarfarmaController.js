const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const BusinesInfo = require('../models/BusinessInfo');
const categoriess = require('../models/Category');
const { body, validationResult } = require('express-validator');

module.exports = new class Karfarma extends Controllr {
// **********BuseniosInfoGet**********
   async BusinessInfoGet(req,res,next){
       try {
let categori = await categoriess.find({});

let BusinesInfoo = await BusinesInfo.find({UserId:req.session.user._id});
        return res.render('panels/karfama/Business.ejs',{categories:categori,BusinesInfo:BusinesInfoo});
       } catch (error) {
           
       }
   }

   // **********BuseniosInfoPost**********
   async BusinessInfoPost(req,res,next){
    try {
       
        var my_array = req.body.parentID;
       let a=[];
// for category
        if(my_array.length == 3){
            let last_element = my_array[my_array.length - 1];
            if(last_element == 0){
                let last_element = my_array[my_array.length - 2];
                a.push(last_element);
            }else{
                let last_element = my_array[my_array.length - 1];
                a.push(last_element);
            }                    
        }else if(my_array.length == 2){
            let last_element = my_array[my_array.length - 1];
            if(last_element == 0){
                let last_element = my_array[my_array.length - 2];
                a.push(last_element);
            }else{
                let last_element = my_array[my_array.length - 1];
                a.push(last_element);
            }     
        }else{
            return res.status(400).send("sa");
        };
    let categorie = await categoriess.find({id : a[0]});
    
     let dateshow = momment().locale('fa').format('YYYY/M/D ');
    console.log(dateshow);
        
//save

const NewBusenniosinfo = new BusinesInfo({
    UserId:req.session.user,
    Category:categorie[0],
    Title:req.body.Title,
    Domain:req.body.Domain,
    Brand:req.body.Brand,
    Activity:req.body.Activity,
    SabtNo:req.body.SabtNo,
    MelliNo:req.body.MelliNo,
    CEO:req.body.CEO,
    StartDate:dateshow,
    Description:req.body.description,
});
if(req.file){
    NewBusenniosinfo.Logo = req.file.path
}

      await NewBusenniosinfo.save();
   
  
    } catch (error) {
        
    }
}
    async CategoryId(req,res,next){
        try {
            let categori = await categoriess.find({parentId:req.params.id});
           
            return res.status(200).send({
                "pardts": categori
            })
        } catch (error) {
            
        }
    }




    // callwork
    async BusinessContactGET(req,res,next){
        try {
            return res.render()
        } catch (error) {
            
        }
    }
}