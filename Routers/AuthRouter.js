const express = require('express');
const router = express.Router();
const AuthContoller = require('../Controller/AuthController');

router.get("/Regester",AuthContoller.RegestrGet);



module.exports = router;