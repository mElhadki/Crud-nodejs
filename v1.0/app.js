const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 3000;
var opn= require('opn');
var chalk = require ('chalk');
var mysql = require ('mysql');


// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))
// middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

//connection db
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin1",
    database: "crudnode"
});


app.listen(port, () => {console.log(`listening on port ${port}!`);
opn("http://localhost:3000/vue/Dashboard.html")
});

// if not connect 

con.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database is Connected');
}); 

//add
app.get('/', (req, res, next) => {
    const sql = "SELECT * FROM category ";
    const query = con.query(sql, (err, result) => {
        if(err)throw err;
            res.render('/Dashboard', {
                    pageTitle : 'Category',
                    items : result,
        
            }); 
        });       
    });
    app.get('/addc',(req,res, next)=>{
        let sql = "SELECT * FROM  category,product";
        let query = con.query(sql, (err, result) => {
            if(err) throw err;
            res.render('/addc', {
                pageTitle : 'Add new category',
                items : result
            });
        });

    });