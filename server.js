var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));

const flash = require('express-flash');
app.use(flash());

require('./server/config/routes.js')(app)

mongoose.connect('mongodb://localhost/Restful_Task');
require("./server/config/mongoose.js");

app.listen(9000, function() {
    console.log("listening on port 90001");
})