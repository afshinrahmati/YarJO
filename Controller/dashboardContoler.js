const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

module.exports = new class Dashboard extends Controllr {

    // ===========dash=======
    async dash(req, res, next) {
        try {
            return res.redirect('/dashboard' + "/" + `${req.session.role.body}`)
        } catch (e) {

        }
    };

    //================Karjoo========
    async karjoodash(req, res, next) {
        if (!req.session.role.body === 'Karjo') {
            return res.redirect('/dashboard' + "/" + `${req.session.role.body}`);
        } else {
            return res.render('panels/karjo/karjo.ejs');
        }

    }

    //================Karfarma========
    async Karfarmadash(req, res, next) {
        if (!req.session.role.body === 'Karfarma') {
            return res.redirect('/dashboard' + "/" + `${req.session.role.body}`);
        } else {
            return res.render('panels/karfama/karfarma.ejs');
        }

    }

    //================admin========
    async admindash(req, res, next) {
        if (!req.session.role.body === 'admin') {
            return res.redirect('/dashboard' + "/" + `${req.session.role.body}`);
        } else {
            return res.render('panels/karjo.ejs');
        }

    }
}