
var dbConn = require('../lib/db');
module.exports = app => {

 
// display Products page
var obj = {};
var objC = {};
app.get('/cat', (req, res)=>{
        dbConn.query('SELECT * FROM category', (err, result)=>{
            if(!err) {
                objC = {
                    data : result
                }
            
               res.send(
                 
                   objC
               );
                 console.log(objC)
               res.end();
             } else {
                
                 console.log(err);
             }
        });
});
app.get('/category' ,(req, res)=>{
      
    dbConn.query('SELECT category.id,category.name as category FROM category inner JOIN category ON category.id = id',(err,result)=>{
 
        if(!err) {
           obj = {
               data : result
           }
       
          res.send(
            
              obj
          );
          res.end();
        } else {
           
            console.log(err);
        }
    });
});

//add category 

app.post('/category',(req,res)=>{

    var name = req.body.name;
    var idC = req.body.idC;
    
    dbConn.query("insert into category (name, id) values ('"+name+"',"+ id +")", (err,rows) =>{

    
    if (err) {
        throw err;
        console.log(err);
        res.send(err);
    } 
    else {
        console.log(req.body);
        console.log("bien ajouter");
        res.send("bien ajouter")
    }
    });
});

//edit Category
app.put('/category', (req, res)=>{

    var id = req.body.id;
    var name = req.body.name;

    dbConn.query("UPDATE category SET name = '" + name + "', id = '" + id + "' WHERE id = '" + id + "'",(err,rows) =>{

        if (err) {
            throw err;
            console.log(err);
            res.send(err);
        } 
        else {
    
            console.log("bien Moudifier");
            res.send("bien Moudifier")
        }
        
    });
});

//delete Category

app.delete('/category', (req, res, next)=>{

    var id = req.body.id;

    dbConn.query("delete from category where id = '" + id + "'",(err,rows) =>{

        if (err) {
            throw err;
            console.log(err);
            res.send(err);
        } 
        else {
    
            console.log("deleted");
            res.send("deleted")
        }

    });
    
})

//end app
}