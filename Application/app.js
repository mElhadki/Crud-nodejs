const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 3000;
var opn= require('opn');

// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))


app.listen(port, () => {console.log(`listening on port ${port}!`);
//opn("http://localhost:3000/vue/Dashboard.html")
});