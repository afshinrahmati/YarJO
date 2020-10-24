const express = require('express');
const router = express.Router();
const AuthContoller = require('../Controller/AuthController');

router.get("/Regester",AuthContoller.RegestrGet);

router.get("/Karjoo",AuthContoller.KarjooGET);
router.post("/Karjoo1",AuthContoller.KarjooPost)

router.get("/Karfarma",AuthContoller.KarfarmaGET);
router.post("/Karfarma1",AuthContoller.KarfarmaPost);


router.get('/Login',AuthContoller.LoginGet)
router.post('/Login1',AuthContoller.LoginPost)


module.exports = router;