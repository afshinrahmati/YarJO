const express = require('express');
const router = express.Router();
//**********Mideleware *******/
const karjomidel = require('../middleware/dashboards/karjomidel');
const karafrainmidel = require('../middleware/dashboards/karfarmamidel');
const adminmidel = require('../middleware/dashboards/adminmidel');
//**********Contoller *******/
const dashboards_Controller = require('../Controller/dashboardContoler');
// ***********************************************
// =================dashboard================/

router.get('/', dashboards_Controller.dash);

// =================dashboard/KARJOO================/

router.get('/karjo', karjomidel, dashboards_Controller.karjoodash);

// =================dashboard/KARFARMA================/

router.use('/karfarma', karafrainmidel, require('../Routers/karfarma.js'));

// =================dashboard/Admin================/

router.use('/admin', adminmidel, require('../Routers/AdminRouter'));


module.exports = router;