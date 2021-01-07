
var dbConn = require('../lib/db');
module.exports = app => {

 
// display Products page
var obj = {};

app.get('/category' ,(req, res)=>{
      
    dbConn.query('select * from category',(err,result)=>{
 
   
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

//add product 

app.post('/category',(req,res)=>{

    var name = req.body.name;

    
    dbConn.query("insert into category (name) values ('"+name+"')", (err,rows) =>{

    
    if (err) {
        throw err;
        console.log(err);
        res.send(err);
    } 
    else {
   
        res.send("bien ajouter")
    }
    });
});


//edit products
app.put('/category', (req, res)=>{

    var id = req.body.id;
    var name = req.body.name;

    dbConn.query("UPDATE category SET name = '" + name + "' WHERE id = '" + id + "'",(err,rows) =>{

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


//delete 

app.delete('/category', (req, res, next)=>{

    var idDeleted = req.body.idDeleted;

    dbConn.query("call ff("+idDeleted+")",(err,rows) =>{

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