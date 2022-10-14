import React,{ useState } from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import {useNavigate }  from 'react-router-dom';

import FormHeader from '../components/FormHeader';

import Axios from 'axios';

var timer = null;

const Login = (props) => {

  const [info,setInfo] = useState({identifier:null,password:null});
  const [authentificationFailed,setAuthentificationFailed] = useState(false)

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:3030/api/login',info)
      .then(res=>{
        // console.log(res.data.token);
        if(res.data.found === 0) setAuthentificationFailed(true)
        else{
          setAuthentificationFailed(1)
          props.setLoggedIn(true)
          let loggedIn = sessionStorage.getItem('loggedIn')
          if(loggedIn == null){
            sessionStorage.setItem('loggedIn',true)
            sessionStorage.setItem('iconSrc',res.data.user.icon)
            sessionStorage.setItem('username',res.data.user.username)
            sessionStorage.setItem('userId',res.data.user.id)
            localStorage.setItem('loggedIn',true)
            localStorage.setItem('iconSrc',res.data.user.icon)
            localStorage.setItem('username',res.data.user.username)
            localStorage.setItem('userId',res.data.user.id)
          }
          localStorage.setItem('jwt_token',res.data.token)
          props.setUserIcon(res.data.user.icon)
          navigate('/')
        } 
        console.log(res.data)
      })
      .catch(err=>{
        console.error(err)
        setAuthentificationFailed(-1)
      })
  }

  function handleIdentifiert(e){
    clearTimeout(timer)
    timer = setTimeout(() => {
      setInfo({...info,identifier:e.target.value})
    }, 300);
  }

  function handlePassword(e){
    clearTimeout(timer)
    timer = setTimeout(() => {
      setInfo({...info,password:e.target.value})
    }, 300);
  }

  function handleRegister(e){
    e.preventDefault()
    navigate('/registration')
  }

  return(
    <Container className="t-cen0ter mt-5 login-box">
      <Row>
        <FormHeader title="login"/>
        <Form className="buttongclr registration-form ps-5 ">
        <Form.Group as={Row} className="mt-3 mb-3">
          <Form.Label column sm="3">Email adresse</Form.Label>
          <Col sm="8"><Form.Control required onChange={(e) => handleIdentifiert(e)} type="text" placeholder="email@domain.com" /></Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-3 mb-3 t-cen0ter">
          <Form.Label column sm="3">Password</Form.Label>
          <Col sm="8"><Form.Control required onChange={(e) => handlePassword(e)} type="password" placeholder="**********" /></Col>
        </Form.Group>
        <Form.Group>
        <Row className=" mt-4 mb-4  pe-5 t-center">
          <Col className="lef0t" /* sm="4" */ >
            <Button disabled={false} value="Submit" onClick={(e) => handleRegister(e)}>Register</Button>
          </Col>
          <Col className="rig0ht " /* sm="7" */ >
            <Button disabled={false} value="Submit" type="submit" onClick={(e) => handleSubmit(e)}>Valider</Button>
          </Col>
        </Row>
        </Form.Group>
        </Form>
      </Row>
      {authentificationFailed?<Alert className='mt-3 t-center danger-alert-width' key='danger' variant='danger'>
          Email adress or password incorrect!
        </Alert>:null}
        {authentificationFailed === -1 ?<Alert className='mt-3 t-center danger-alert-width' key='danger' variant='danger'>
          Something went wrong
        </Alert>:null}
    </Container>
  )

}

export default Login;