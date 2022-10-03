const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');

const dotenv = require('dotenv')
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    `SELECT * FROM user WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This email is already in use!'
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              // req.body.userName,req.body.firstName,req.body.lastName,req.body.email,psw,req.body.status,req.body.iconSrc
              `INSERT INTO user (username,firstname, lastname,email ,password, icon,status) VALUES (${
                db.escape(req.body.userName)},${db.escape(req.body.firstName)},${db.escape(req.body.lastName)},${
                  db.escape(req.body.email)}, ${db.escape(hash)}, ${db.escape(req.body.iconSrc)}, ${db.escape(req.body.status)})`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
          }
        });
      }
    }
  );
});

router.post('/login', (req, res, next) => {
  db.query(
    `SELECT *, count(*) as found FROM user WHERE email = ${db.escape(req.body.identifier)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'email or password is incorrect!1'
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: 'email or password is incorrect!2'
            });
          }
          if (bResult) {
            const token = jwt.sign({
                username: result[0].username,
                userId: result[0].id,
              },
              JWT_SECRET, {
                expiresIn: '1d'
              }
            );
            // db.query(
            //   `UPDATE user SET last_login = now() WHERE id = '${result[0].id}'`
            // );
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0],
              found: result[0]['found']
            });
          }
          return res.status(401).send({
            msg: 'email or password is incorrect!3'
          });
        }
      );
    }
  );
});

router.post('/verify-login',userMiddleware.isLoggedIn,(req,res,next)=>{
  // console.log(req.userData);
  res.status(200).send({isLoggedIn:true});
})

router.get('/secret-route', userMiddleware.isLoggedIn ,(req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;