
--------------------------------------------------------------------------
|             CRUD Operation using NodeJS / ExpressJS / MySQL            |
--------------------------------------------------------------------------

Step 1 : install nodejs in your system and run follwoing comment 
			npm init
		
Step 2 : Install Requred packages using NPM

			npm install --save express mysql body-parser opn
			npm install -g nodemon (optional - used to run app.js automatically while any file content changes)
		
Step 3 : Add follwoing code in app.js
		
			const express = require('express');
			const bodyParser = require('body-parser');
			const mysql = require('mysql');
      const opn = require('opn');
			const app = express();

			// Server Listening
		app.listen(port, () => {console.log(`listening on port ${port}!`);
                 opn("http://localhost:8000/vue/Dashboard.html")
                   });
			
			nodemon app (OR) npm start
		
Step 4 : Create Database Connection 

			const mysql=require('mysql');
			
			const connection=mysql.createConnection({
			  host:'localhost',
			  user:'root',
			  password:'admin1',
			  database:'crudnode'
			});
			
			connection.connect(function(error){
			  if(!!error) console.log(error);
			  else console.log('Database Connected!');
			}); 

Setp 5 : Define view engin / public path / view files path / bodyParser

			//set view engine
			app.use(bodyParser.json());
			app.use(bodyParser.urlencoded({ extended: false }));

Setp 6 : Routes Product/categoey
			
		
      const ProductRoutes = require("./Routes/products")(app);
      const CategoryRoutes = require("./Routes/categories")(app);

Setp 7 : Run a server and check with Browser

			npm start (OR) nodemon app

			http://localhost:8000/vue/Dashboard.html
			
Step 8 : Get value from database and show in HTML table using ExpressJS / MySQL
