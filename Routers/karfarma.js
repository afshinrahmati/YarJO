const express = require('express');
const router = express.Router();
// ********COntoller*********
const dashboardsController = require('../Controller/dashboardContoler');
const karfarmaContoler = require('../Controller/KarfarmaController');
// ***************midelver*********
const miderverKarfarma = require('../middleware/dashboards/karfarmamidel');
// ******************************
router.get('/',dashboardsController.Karfarmadash);

router.get('/BusinessInfo',miderverKarfarma,karfarmaContoler.BusinessInfoGet);
router.post('/BusinessInfopost',miderverKarfarma,karfarmaContoler.BusinessInfoPost);

router.get('/Category/:id',miderverKarfarma,karfarmaContoler.CategoryId)

module.exports = router;