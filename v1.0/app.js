const express = require('express');
const app = express();
//const mongoose = require('mongoose');
var bodyParser=require('body-parser');
const port = 3000;
const mysql = require('mysql');
var opn= require('opn');
/*
const url ="mongodb+srv://AdminDb:admin@cluster0.kzovw.mongodb.net/crud?retryWrites=true&w=majority";
//connect with database

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected"))
.catch(err => console.log(err));

const Category = mongoose.model('Category', { name: String });

const category =  new Category ({name: 'acces'});
category.save().then(() => console.log('curd add'));

app.get("/", function(req,res){
   Category.find((err,categories)=> {
     if(err || !categories){
        return res.json({error : "No Data"})
     }
     res.json({categories});
   
    });
});
*/
 
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

//obligatoire 
app.use(bodyParser.urlencoded({    
  extended: true

}));                 
 



app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => {console.log(`listening on port ${port}!`);

opn("http://localhost:8000/vue/Dashboard.html")
});
/*
//routes crud

//Display
app.get('/', (req, res, next) => {
  const sql = "SELECT * FROM category";
  const query = con.query(sql, (err, result) => {
      if(err)throw err;
          res.render('Dashboard', {
                  pageTitle : 'Category',
                  items : result,
          }); 
      });       
  });

// Display edit
app.get('/add',(req,res, next)=>{
  let sql = "SELECT * FROM  category";
  let query = con.query(sql, (err, result) => {
      if(err) throw err;
      res.render('Dashboard', {
          pageTitle : 'Add new Category',
          items : result
      });
  });

});

//Update

app.post('/editc', (req, res) => {
  let data = {name: req.body.name};
  let id = req.body.id
  let sql = `UPDATE category SET ? WHERE id = ${id}`;
  let query = con.query(sql, data,(err, results) => {
    if(err) throw err;

    res.redirect("/Dashboard");
  
  });
  
});
// Delete
app.get('/delete/:id', (req, res) => {
  const CategoryId = req.params.id;
  let sql = `DELETE from category where id = ${CategoryId}`;
  let query = con.query(sql,(err, result) => {
      if(err) throw err;
      res.redirect(baseURL);
  });
});

//Add

app.post('/addcate',(req, res) => {
  let data = {name: req.body.name };
  let sql = "INSERT INTO category SET ?";
  let query = con.query(sql, data,(err, results) => {
    if(err) throw err;

    res.redirect('Dashboard');
  
  });
});

*/