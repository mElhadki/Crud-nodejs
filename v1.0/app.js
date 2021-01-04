const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 8000;
const mysql = require('mysql');
var opn= require('opn');

//connect with database

const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'admin1',
    database:'crudnode'

});

//test Connection 

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => {console.log(`listening on port ${port}!`);
opn("http://localhost:8000/vue/Dashboard.html")
});
