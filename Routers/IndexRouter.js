const express= require('express');
const router = express.Router();
const IndexController = require('../Controller/IndexController');


router.get('/',IndexController.Home);

router.use("/User",require('./AuthRouter'));



module.exports = router;