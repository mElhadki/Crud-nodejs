const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 8000;
const mysql = require('mysql');
var opn= require('opn');
const connection = require('./lib/db');


// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'));

//Routes Product 
const ProductRoutes = require("./Routes/products")(app);
const CategoryRoutes = require("./Routes/categories")(app);

app.listen(port, () => {console.log(`listening on port ${port}!`);
//opn("http://localhost:8000/vue/Dashboard.html")
});
