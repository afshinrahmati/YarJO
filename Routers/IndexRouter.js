const express = require('express');
const router = express.Router();
const IndexController = require('../Controller/IndexController');
const midelver_dashboard = require('../middleware/dashboards/dashboard');
const midelver_Auth = require('../middleware/Auth/Authmidl');

// $$$$$$$$$$$$$ Home $$$$$$$$$$

router.get('/', IndexController.Home);
router.get('/bloges', IndexController.bloges);
router.get('/AboutUs', IndexController.AboutUs);
router.get('/IndexRoute', IndexController.IndexRoute);
router.get('/search', IndexController.search);

// $$$$$$$$$$$$$$ USER $$$$$$$$$$$$

router.use("/user", midelver_Auth, require('./AuthRouter'));

// $$$$$$$$$$$$$$ DASHBOARD $$$$$$$$$$$$

router.use('/dashboard', midelver_dashboard, require('./DashboardRouter'));

// $$$$$$$$$$$$$$$ LogOut $$$$$$$$$$$$$
router.get('/logout', IndexController.Logout);

// $$$$$$$$$$$$ ERRRO404page $$$$$$$$$$$$$$
router.all('*', IndexController.erroe404);


module.exports = router;