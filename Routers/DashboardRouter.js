const express = require('express');
const router = express.Router();


router.get('/admin',(req,res,next)=>{
    console.log("admin");
});

router.get('/karjo',(req,res,next)=>{
    return res.render('panels/karjo.ejs')
});

router.get('/karfarma',(req,res,next)=>{
    return res.render('panels/karfarma.ejs')
});
module.exports = router;