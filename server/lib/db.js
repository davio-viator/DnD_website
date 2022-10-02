const mysql = require('mysql');

const connection = mysql.createConnection({
  host:'127.0.0.1',
    user:'root',
    password:'',
    database:'dnd_website'
})

connection.connect(function(error){
  !!error?console.log("Error",error):console.log('Connected!!!')
})     
module.exports = connection;