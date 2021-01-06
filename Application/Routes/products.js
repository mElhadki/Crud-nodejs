
var dbConn = require('../lib/db');
module.exports = app => {

 
// display Products page
var obj = {};
var objC = {};
app.get('/productsc', (req, res)=>{
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
app.get('/products' ,(req, res)=>{
      
    dbConn.query('SELECT product.id,product.name,product.prix,product.idC,category.name as category FROM product inner JOIN category ON category.id = product.idC',(err,result)=>{
 
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

app.post('/products',(req,res)=>{

    var name = req.body.name;
    var idC = req.body.idC;
    var prix = req.body.prix;
    
    dbConn.query("insert into product (name, prix, idC) values ('"+name+"', "+ prix+", "+ idC +")", (err,rows) =>{

    
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

//edit products
app.put('/products', (req, res)=>{

    var id = req.body.id;
    var name = req.body.name;
    var prix = req.body.prix;
    var idC = req.body.idC;

    dbConn.query("UPDATE product SET name = '" + name + "', prix = '" + prix + "', idC = '" + idC + "' WHERE id = '" + id + "'",(err,rows) =>{

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

app.delete('/products', (req, res, next)=>{

    var id = req.body.id;

    dbConn.query("delete from product where id = '" + id + "'",(err,rows) =>{

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