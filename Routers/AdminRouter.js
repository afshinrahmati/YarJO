const express = require('express');
const router = express.Router();

const adminmidel = require('../middleware/dashboards/adminmidel');
//**********Contoller *******/
const dashboardsController = require('../Controller/dashboardContoler');
const AdminController = require('../Controller/AdminController');
const { route } = require('./karfarma');
// ***********************************************


router.get('/', adminmidel, dashboardsController.admindash);


router.get("/CategoryGet",adminmidel,AdminController.CategoriGet);
router.post("/Categorypost",adminmidel,AdminController.Categoripost);
router.get('/CategoryID/:id',adminmidel,AdminController.CategoryID);



module.exports = router;