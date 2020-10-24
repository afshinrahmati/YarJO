const express = require('express');
const Config = require('./Config');
global.Config = require('./Config');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const Mongostore = require('connect-mongo')(session);  
const flash = require('req-flash');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
// ****Set*****
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// ******Session+Cookie+flash********
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 2000 * 3600 * 24 * 100)
    },
    store: new Mongostore({ mongooseConnection: mongoose.connection })
}));
app.use(flash());
// ******ReadRouter*******

app.use('/', require('./Routers/IndexRouter'));

mongoose.connect('mongodb://localhost:27017/YaRjoo', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(Config.Port,function(){
    console.log('www.'+Config.Port+'.com');
})