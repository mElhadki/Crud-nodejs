var mysql = require('mysql');


//connect with database

var connection = mysql.createConnection({
	host:'localhost',
    user:'root',
    password:'',
    database:'crudnode'
});



//test Connection 


connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;