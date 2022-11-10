const http = require('http')
const port = 3030
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const jsSHA = require('jssha');
const fileUpload = require('express-fileupload');

/* const server = http.createServer(function(req,res){
  res.write('Hello node')
  res.end()
})

server.listen(port,function(error){
  if(error){
    console.error('something went wrong',error)
  }else{
    console.log('Server is listening on port '+port)
  }
}) */


//req.query.[arg] to get the value of an parameter in the url
const app = express();

const path = require('path');
const { query } = require('express');

// app.use(bodyParser({limit:'50mb'}))
app.use(bodyParser.json())
app.use(cors());
app.use(express.static(path.join(__dirname,'build')));
app.use(fileUpload())
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
  next();
});



const insertSequenceCard = '(`name`,`rank`,ecology,strenght,weakness,imgSrc,keyword)';
const insertSequenceUser = '(username,firstname,lastname,email,password,status,icon)';


// const connection = mysql.createConnection({
//   host:'127.0.0.1',
//     user:'root',
//     password:'',
//     database:'dnd_website'
// })

const connection = require('./lib/db.js')

// connection.connect(function(error){
//   !!error?console.log("Error",error):console.log('Connected!!!')
// })     
 
const router = require('./routes/router.js');
app.use('/api', router);

app.post('/save_card',(req,res)=>{
  let src;
  console.log(req.body.ecology);
  if(req.body.imgSrc.startsWith('http')) src = req.body.imgSrc
  else{
    try {
      const image = req.files.imgFile
      const uploadPath =  __dirname+'/../dnd_website/public/assets/images/'+image.name
      console.log(uploadPath)
      // src = uploadPath
      src = './assets/images/'+image.name
      image.mv(uploadPath,(err) => {
        if(err) return res.status(500).send(err)
        // res.send('File uploaded')
      })
    } catch (error) {
      console.log(error)
    }
  }
  try {
    connection.query(`INSERT INTO card ${insertSequenceCard} VALUES (?,?,?,?,?,?,?);`,
    [req.body.name, req.body.rank,req.body.ecology,req.body.strenght,req.body.weakness,src,req.body.keyword],function (errors,rows,fields){
      if(!!errors){
        console.error('Error in the query',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    });
  } catch (error) {
    console.log(error);
    console.log('Connected!!!')
  }
});

app.post('/check-email',(req,res) => {
  console.log(req.body.email);
  try {
    connection.query(`SELECT count(*) as count FROM user WHERE email = ?`,[req.body.email],function (errors,rows,fields){
      if(!!errors){
        console.error('Error in the query',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows[0])
      }
    })
  } catch (error) {
    console.log();(error)
    console.log('Connected!!!')
  }
});

app.post('/register_user',(req,res) =>{
  // console.log(req.body)
  const shaObj = new jsSHA('SHA-512','TEXT',{encoding: 'UTF8'});
  shaObj.update(req.body.password)
  const psw = shaObj.getHash('HEX');
  try {
    connection.query(`INSERT INTO user ${insertSequenceUser} VALUES (?,?,?,?,?,?,?);`,
    [req.body.userName,req.body.firstName,req.body.lastName,req.body.email,psw,req.body.status,req.body.iconSrc],function (errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    } );
  } catch (error) {
    console.log(error);
    console.log('Connected!!!')
  }
});

app.get('/test',(req,res)=>{
  try {
    res.send(req.query.v)
  } catch (error) {
    res.send(error)
  }
})

app.post('/login',(req,res) => {
  try {
    const shaObj = new jsSHA('SHA-512','TEXT',{encoding: 'UTF8'});
    shaObj.update(req.body.password)
    const psw = shaObj.getHash('HEX');
    console.log(psw);
    connection.query('SELECT count(*) as found,icon,username FROM user WHERE email = ? AND password = ?',[req.body.identifier,psw],function (errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful',rows)
        res.send(rows)
      }
    } );
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.get('/get-cards',(req,res) => {
  try {
    console.log(req.query)
    connection.query(`SELECT * FROM card ORDER BY id LIMIT ${req.query.limit} OFFSET ${req.query.offset}`,function(errors,rows,fields) {
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  } catch (error) {
    
  }
})

app.get('/get-decks',(req,res)=>{
  try {
    connection.query(`SELECT * FROM deck WHERE ownerId=${req.query.id}`,function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  } catch (error) {
    console.log(error)
  }
})


app.get('/get-spells-db-test',(req,res)=>{
  try {
    connection.query('SELECT spells FROM character_sheet WHERE id=0',function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/get-character-db-test',(req,res)=>{
  try {
    connection.query('SELECT * FROM character_sheet WHERE id=0',function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/get-cards-deck',(req,res) => {
  try {
    connection.query(`
    SELECT * 
    FROM deck 
    JOIN decks_card ON deck.id = decks_card.deck_id 
    JOIN user ON deck.ownerId = user.id 
    left JOIN card ON card.id = decks_card.card_id
    WHERE user.id = ${req.query.id} 
    AND deck.id = ${req.query.deck_id}
    LIMIT ${req.query.limit}
    OFFSET ${req.query.offset}
`,function(errors,rows,fields) {
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  } catch (error) {
    
  }
})

app.get('/get-notes',(req,res) => {
  try{
    connection.query(`SELECT name,notes FROM card WHERE id = ${req.query.id}`,function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  }
  catch(error){
    console.log(error);
  }
})

app.get('/set-notes',(req,res) => {
  try{
    connection.query(`UPDATE card set notes = ? WHERE id = ?`,[req.query.notes,req.query.id],function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  }
  catch(error){
    console.log(error);
  }
})

app.get('/get-spells',(req,res)=>{
  try{
    connection.query(`SELECT spells from spells`,function(errors,rows,fields){
      if(!!errors){
        console.error('Error in the query ',errors)
        res.status(400).send(errors)
      }else{
        console.log('Query successful')
        res.send(rows)
      }
    })
  }
  catch(error){
    console.log(error);
  }
})



app.listen(3030,'0.0.0.0');

