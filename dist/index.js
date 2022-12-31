"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
require("./db");
var _morgan = _interopRequireDefault(require("morgan"));
var _config = require("./config");
var _expressHandlebars = require("express-handlebars");
var _index = _interopRequireDefault(require("./routes/index"));
/*
This Import is used to try the another way to config hbs
import exphbs from "express-handlebars"
import { create } from 'express-handlebars'
*/

var app = (0, _express["default"])();
//const methodOverride = require('method-override')
//const session = require('express-session')

//const routesindex = require("./routes/product");
//const routesproduct = require("./routes/user");

//Settings

app.set("port", _config.PORT);
app.set('views', _path["default"].join(__dirname, 'views'));

/*
One way to config hbs
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})

app.engine('.hbs', engine)
*/

app.engine(".hbs", (0, _expressHandlebars.engine)({
  //Here I config thñe layoutDir main
  layoutDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: "main",
  //Here I config the partials Dir
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  extname: ".hbs"
}));
app.set('view engine', '.hbs');

//Middlewars
//This linecode is used to get the data od the user that is send from the front
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

//This is used for to be able to use another methods like PUT or DELETE
//app.use(methodOverride('_method'))

//This is used to get the user data login
/*app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}
))*/

//Routes
app.use(_index["default"]);
//app.use(routesproduct)
//app.use(routessusers)

//This part of code is used to config the static files that can be used by the nav

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));

//Server is listening
app.listen(app.get("port"), function () {
  console.log("Server app listening at http://localhost:".concat(app.get("port")));
});