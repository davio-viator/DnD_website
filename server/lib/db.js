const mysql = require('mysql');
const mysql2 = require('mysql2');

// const connection = mysql.createConnection({
//   host:'127.0.0.1',
//   user:'root',
//   password:'',
//   database:'dnd_website'
// })

// const connection = mysql2.createConnection({
//   host:'127.0.0.1',
//   user:'root',
//   password:'password',
//   database:'dnd_website'
// })

// host:'127.0.0.1',
//   user:'root',
//   password:'password',
//   database:'dnd_website',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 10

const pool = mysql2.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'dnd_website',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
  pool:{
    min:0,
    max:5,
    acquire:30000,
    idle: 10000,
  }
})

pool.connect(function(error){
  !!error?console.log("Error",error):console.log('Connected!!!')
})     
module.exports = pool;