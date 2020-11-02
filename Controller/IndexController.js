const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const { body, validationResult } = require('express-validator');


module.exports = new class IndexRouter extends Controllr {

    // *******Home**********

    async Home(req, res, next) {
        try {
            return res.render('home/main.ejs')
        } catch (error) {

        }
    };

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