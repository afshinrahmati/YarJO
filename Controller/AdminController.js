const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const Category= require('../models/Category');
const { body, validationResult } = require('express-validator');

module.exports = new class Admin extends Controllr {

  async CategoriGet(req,res,next){
      try {
      
          let categories =await Category.find({});
        
         return res.render('panels/admin/Categori.ejs',{categories:categories});
      } catch (error) {
          
      }
  }
  async Categoripost(req,res,next){
    try {
        var my_array = await Category.find({});
        var last_element = my_array[my_array.length - 1];

       console.log(1);
        let data ={

        }
        if(last_element == null)
        {
            data.id =1;
        }else{
            data.id = last_element.id + 1;
        }
        console.log(req.body);
      const NewCategory = new Category({
        id:data.id,
        name:req.body.name,
        parentId :req.body.parentID
      });
     
      await NewCategory.save();
    } catch (error) {
        
    }
}

async CategoryID(req,res,next){
  try {
    let pardts = await Category.find({parentId:req.params.id});
    return res.status(200).send({
      "City":pardts
  })
    
  } catch (error) {
    
  }
}
async CategoryIDD(req,res,next){
  try {
    let pardts = await Category.find({parentId:req.params.id});
  
    
  } catch (error) {
    
  }
}
}