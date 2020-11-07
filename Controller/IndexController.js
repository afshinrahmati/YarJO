const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const { body, validationResult } = require('express-validator');


module.exports = new class IndexRouter extends Controllr {

    // *******Home**********

    async Home(req, res, next) {
        try {
            return res.render('home/index.ejs')
        } catch (error) {

        }
    };
    // *******bloges
    async bloges(req,res,next){
        try {
           
            return res.render('home/blogs.ejs')
        } catch (error) {
            
        }
    }
 // *******AboutUs
 async AboutUs(req,res,next){
    try {
       
        return res.render('home/yarjoo_introduction.ejs')
    } catch (error) {
        
    }
}
async search(req,res,next){
    try {
        return res.render("home/advanced_search.ejs")   
    } catch (error) {
        
    }
}
// ***IndexRoute
async IndexRoute(req,res,next){
    try {
        return res.render('home/introduction.ejs')
    } catch (error) {
        
    }
}


    // *******Logout**********

    async Logout(req, res, next) {
        try {
            req.session.destroy();
            return res.redirect('/');
        } catch (error) {

        }
    };

    // *******erroe404**********

    async erroe404(req, res, next) {

        try {
            res.status(404).render('home/error404.ejs', { title: req.path });
        } catch (error) {
            next();
        }

    };

}