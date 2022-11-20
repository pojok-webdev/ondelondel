const cookieParser = require('cookie-parser');

express = require('express'),
ejs = require('ejs'),
bodyParser = require('body-parser'),
session = require('express-session'),
rest = require('./js/rest'),
commons = require('./js/commons'),
app = new express
app = new express()
app.set('views','./views')
app.set('view engine','ejs')
app.use(express.static(__dirname + '/'));

//app.use(express.static(__dirname + '/..'));
app.use(bodyParser.json({'limit':'10mb',extended:true}))
app.use(bodyParser.urlencoded({'limit':'10mb',extended:true}))
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  
module.exports = {
    app:app,
    rest:rest,
    commons:commons
}