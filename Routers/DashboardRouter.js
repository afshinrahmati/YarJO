const express = require('express');
const router = express.Router();


router.get('/admin',(req,res,next)=>{
    console.log("admin");
});

router.get('/karjo',(req,res,next)=>{
    console.log("karjo");
});

router.get('/karfarma',(req,res,next)=>{
    console.log("karfarma");
});
module.exports = router;