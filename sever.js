import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import bodyParser from 'body-parser';

//import mysql from 'mysql';
//LOAD CONFIG
dotenv.config({path: './config/config.env'});

//run server = express();
const sever = express();
const port = process.env.PORT || 7000;
sever.listen(port, console.log("Servidor  processando em " + process.env.NODE_ENV  + " na porta " + port + "..."));

//define Routes
sever.use(bodyParser.urlencoded({extended:true}));
sever.use(bodyParser.json());
sever.use(router);


//MYSQL_HOST ='localhost'
//MYSQL_port = ' 3306'
//MYSQL_user = 'user'
//MYSQL_password = ' pass' (to.produto)

//var connection = mysql.createConnection({
 //   host     : 'localhost',
  //  user     : 'foodreview',
  //  password : 'foodreview',
 //   database : 'foodreview'
//  });
   
 // connection.connect();
   
 // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
 //   if (error) throw error;
 //   console.log('The solution is: ', results[0].solution);
 // });
   
//  connection.end();