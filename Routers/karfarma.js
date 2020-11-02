const express = require('express');
const router = express.Router();
const Upload =require('../upload/Logo/logoMulter');
// ********COntoller*********
const dashboardsController = require('../Controller/dashboardContoler');
const karfarmaContoler = require('../Controller/KarfarmaController');
// ***************midelver*********
const miderverKarfarma = require('../middleware/dashboards/karfarmamidel');
// ******************************
router.get('/',dashboardsController.Karfarmadash);

// *******AboutWork*********
router.get('/BusinessInfo',miderverKarfarma,karfarmaContoler.BusinessInfoGet);
router.post('/BusinessInfopost',miderverKarfarma,Upload.single('img'),karfarmaContoler.BusinessInfoPost);
router.get('/Category/:id',miderverKarfarma,karfarmaContoler.CategoryId);
router.post('/UpdateBusinessInfopost',miderverKarfarma,Upload.single('img'),karfarmaContoler.UpdateBusinessInfopost)
// *******CallWork*********
router.get('/BusinessContact',miderverKarfarma,karfarmaContoler.BusinessContactGET);


module.exports = router;