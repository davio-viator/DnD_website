const mysql = require('mysql');
const mysql2 = require('mysql2');

// const connection = mysql.createConnection({
//   host:'127.0.0.1',
//   user:'root',
//   password:'',
//   database:'dnd_website'
// })

const connection = mysql2.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'dnd_website'
})

const pool = mysql2.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'dnd_website',
  waitForConnections: true,
  connectionLimit: 100000,
  queueLimit: 10
})

pool.connect(function(error){
  !!error?console.log("Error",error):console.log('Connected!!!')
})     
module.exports = pool;