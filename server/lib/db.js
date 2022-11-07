const mysql = require('mysql');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host:'127.0.0.1',
  user:'admin',
  password:'',
  database:'dnd_website'
})

connection.connect(function(error){
  !!error?console.log("Error",error):console.log('Connected!!!')
})     
module.exports = connection;