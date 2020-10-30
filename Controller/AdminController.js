const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const role = require('../models/Roles');
const User = require('../models/User');
const Category = require('../models/Category');
const { body, validationResult } = require('express-validator');

module.exports = new class Admin extends Controllr {
    // ***********GEt_Category************
    async CategoriGet(req, res, next) {
            try {
                let categories = await Category.find({});
                return res.render('panels/admin/Categori.ejs', { categories: categories });
            } catch (error) {

            }
        }
        // ***********Post_Category************
    async Categoripost(req, res, next) {
        try {
            var my_array = await Category.find({});
            var last_element = my_array[my_array.length - 1];
            let data = {

            }
            if (last_element == null) {
                data.id = 1;
            } else {
                data.id = last_element.id + 1;
            }

            const NewCategory = new Category({
                id: data.id,
                name: req.body.name,

            });
            if (req.body.parentIDD == 0) {
                NewCategory.parentId = req.body.parentID;

            } else {
                NewCategory.parentId = req.body.parentIDD
            }
            await NewCategory.save();
            return res.redirect('/dashboard/admin/CategoryGet');

        } catch (error) {

        }
    };
    // ***********Product2************
    async CategoryID(req, res, next) {
        try {

            let pardts = await Category.find({ parentId: req.params.id });

            return res.status(200).send({
                "pardts": pardts
            })

        } catch (error) {

        }
    };
    // ***********Product3***********8
    async CategoryIDD(req, res, next) {
        try {

            let pardts = await Category.find({ parentId: req.params.id });
            return res.status(200).send({
                "pardts": pardts
            })

        } catch (error) {

        }
    }
}