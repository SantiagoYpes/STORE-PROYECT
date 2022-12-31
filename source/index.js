
import express from "express";
import path from "path"
import "./db"
import morgan from "morgan";


/*
This Import is used to try the another way to config hbs
import exphbs from "express-handlebars"
import { create } from 'express-handlebars'
*/
import {engine} from 'express-handlebars'
const app = express();
//const methodOverride = require('method-override')
//const session = require('express-session')
import indexRoutes from "./routes/index";



//const routesindex = require("./routes/product");
//const routesproduct = require("./routes/user");

//Settings

app.set("port", 3000);

app.set('views', path.join(__dirname,'views'))

/*
One way to config hbs
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})

app.engine('.hbs', engine)
*/

app.engine(".hbs", engine({
    //Here I config thñe layoutDir main
    layoutDir: path.join(app.get("views"),"layouts"),
    defaultLayout: "main",
    //Here I config the partials Dir
    partialsDir:path.join(app.get("views"),"partials"),
    extname: ".hbs"
}))

app.set('view engine', '.hbs')

//Middlewars
//This linecode is used to get the data od the user that is send from the front
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

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
app.use(indexRoutes)
//app.use(routesproduct)
//app.use(routessusers)


//This part of code is used to config the static files that can be used by the nav

app.use(express.static(path.join(__dirname,"public")))

//Server is listening
app.listen(app.get("port"), () => {
  console.log(`Server app listening at http://localhost:${app.get("port")}`);
});
