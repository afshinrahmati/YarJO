const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

module.exports = new class AuthRouter extends Controllr {

    // *******RegestrGet**********
    async RegestrGet(req, res, next) {
            try {
                return res.render('auth/Regester.ejs');
            } catch (error) {

            }
        }
        //*********Karjo */
        //get
    async KarjooGET(req, res, next) {
        try {
            return res.render('auth/karjo.ejs', { empty: req.flash("emptyFild"), threis: req.flash('THreis') });
        } catch (error) {

        }
    };
    //post
    async KarjooPost(req, res, next) {
        try {
            let str = req.body.mobile
            let mobile = str.startsWith("09");

            if (!req.body.mobile || req.body.mobile.length != 11 || mobile === false) {
                req.flash("emptyFild", 'لطفا با دقت پر فرمایید');
                return res.redirect('/user/Karjoo');
            }
            let user = await User.findOne({ mobile: req.body.mobile });
            if (user) {
                req.flash("THreis", "شما قبلا ثبت نام کرده اید");
                return res.redirect('/user/karjoo');

            }
            let Role = await role.findOne({ slug: 'Karjo' });
            let Password = Math.floor(100000 + Math.random() * 900000);

            const NewUsers = new User({
                mobile: req.body.mobile,
                roles: [Role._id],
                password: Password
            });
            await NewUsers.save();
            return res.redirect('/user/Login');
        } catch (error) {

        }
    };

    //*********karfarma ***********/
    //get
    async KarfarmaGET(req, res, next) {
        try {
            return res.render('auth/Karfarma.ejs', { empthy: req.flash('emptyFild'), threis: req.flash('THreis') })
        } catch (error) {

        }
    };
    //post
    async KarfarmaPost(req, res, next) {
        try {
            let str = req.body.mobile
            let mobile = str.startsWith("09");

            if (!req.body.mobile || req.body.mobile.length != 11 || mobile === false) {
                req.flash("emptyFild", 'لطفا با دقت پر فرمایید');
                return res.redirect('/user/Karfarma');
            }
            let user = await User.findOne({ mobile: req.body.mobile });
            if (user) {
                req.flash("THreis", "شما قبلا ثبت نام کرده اید");
                return res.redirect('/user/Karfarma');

            }
            let Role = await role.findOne({ slug: 'Karfarma' });

            let Password = Math.floor(100000 + Math.random() * 900000);

            const NewUsers = new User({
                mobile: req.body.mobile,
                roles: [Role._id],
                password: Password
            });
            await NewUsers.save();
            return res.redirect('/user/Login');
        } catch (error) {

        }
    };

    // ****************************Login******************
    //Get
    async LoginGet(req, res, next) {
        try {
            return res.render('auth/Login.ejs', { Thereisnoo: req.flash("ThereIsNo") });
        } catch (error) {

        }
    };
    //poat

    async LoginPost(req, res, next) {
        try {

            let user = await User.findOne({
                mobile: req.body.mobile,
                password: req.body.paswword
            });

            if (!user) {
                req.flash("ThereIsNo", "متاسفانه شما ثبت نام نکرده اید,برای ثبت نام کلیک فرمایید");
                return res.redirect('/user/Login');
            }
            if (user) {

                let Roles = await role.findById({ _id: user.roles[0] });

                req.session.user = user;
                req.session.role = Roles;
                if (Roles.slug == "Karfarma") {
                    return res.redirect('/dashboard/karfarma')
                };
                if (Roles.slug == "Karjo") {
                    return res.redirect('/dashboard/karjo');
                };

                if (Roles.slug == "admin") {
                    return res.redirect('/dashboard/karjo');
                };
            }

        } catch (error) {

        }
    }
}