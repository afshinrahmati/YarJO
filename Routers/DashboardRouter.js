const express = require('express');
const router = express.Router();
//**********Mideleware *******/
const karjo_midel = require('../middleware/dashboards/karjomidel');
const karafrain_midel = require('../middleware/dashboards/karfarmamidel');
const admin_midel = require('../middleware/dashboards/adminmidel');
//**********Contoller *******/
const dashboards_Controller = require('../Controller/dashboardContoler');
// ***********************************************
// =================dashboard================/

router.get('/', dashboards_Controller.dash);

// =================dashboard/KARJOO================/

router.get('/karjo', karjo_midel, dashboards_Controller.karjoodash);

// =================dashboard/KARFARMA================/

router.get('/karfarma', karafrain_midel, dashboards_Controller.Karfarmadash);

// =================dashboard/Admin================/

router.get('/admin', admin_midel, dashboards_Controller.admindash);


module.exports = router;