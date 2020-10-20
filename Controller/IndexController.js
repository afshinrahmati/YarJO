const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const { body, validationResult } = require('express-validator');

module.exports = new class IndexRouter extends Controllr {

    // *******Home**********
async Home(req,res,next){
    try {
        return res.render('home/Home.ejs')
    } catch (error) {
        
    }
}

}