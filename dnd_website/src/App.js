import logo from './logo.svg';
import './App.css';

import CardMakerPage from "./pages/CardMakerPage";
import Registration from './pages/Resgistration';
import Login from './pages/Login';
import Logout from './pages/Logout';
import MainPage from './pages/MainPage';
import Cards from './pages/Cards';
import Characters from './pages/Characters';
import CharacterView from './pages/CharacterView';
import Deck from './pages/Deck';
import DeckView from './pages/DeckView';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Axios from 'axios';

import UserIcon from './assets/images/user-icon.png'

import NavBarComponent from './components/NavBarComponent';


function App() {


  function getLoggedIn(){
    let isLoggedIn;
    if(localStorage.getItem('loggedIn')){
      let jwt = localStorage.getItem('jwt_token');
  
      Axios.post('http://localhost:3030/api/verify-login',null,{
        headers:{
          'Authorization':'Bearer '+jwt
        }
      })
      .then(res =>{
        isLoggedIn = true
        setLoggedIn(true)

        
      }).catch(err=>{
        setLoggedIn(false)
        isLoggedIn = false  
        console.error(err)
      })
    }else{
      localStorage.removeItem('jwt_token')
    }
      // setLoggedIn(false)
      return isLoggedIn


  }

  
  // const iconSrc = sessionStorage.getItem('iconSrc')? sessionStorage.getItem('iconSrc'):UserIcon
  const iconSrc = localStorage.getItem('iconSrc')? localStorage.getItem('iconSrc'):UserIcon
  // const [loggedIn,setLoggedIn] = useState(sessionStorage.getItem('loggedIn'));
  const [loggedIn,setLoggedIn] = useState(getLoggedIn());
  const [userIcon,setUserIcon] = useState(iconSrc)
  
  
  
  return (
    <Router>    
      <Container className='p-0' fluid={true}>

        <NavBar className='' bg='dark' expand='lg'>
          <NavBar.Brand className="menulink ps-3">Davio Viator</NavBar.Brand> 

            <NavBar.Toggle className="boarder-0" aria-controls="navbar-toggle"/>
            <NavBar.Collapse className='justify-content-end' id="navbar-toggle">
              <Nav className="ml-auto pe-3">
                <Link className="nav-link menulink" to="/mainpage">Main Page</Link>
                {loggedIn?<Link className="nav-link menulink" to="/card-editor">Card Editor</Link>:null}
                <Link className="nav-link menulink" to="/registration">Registration</Link>
                {loggedIn?<Link className="nav-link menulink" to="/user">{localStorage.getItem('username')}</Link>:null}
                {!loggedIn?<Link className="nav-link menulink" to="/login">Login</Link>:<Link className="nav-link menulink" to="/logout">Logout</Link>}
                {loggedIn?<Image className='user-icon-nav-bar ps-2 pe-2 pt-2 pb-2' src={userIcon} fluid={true} roundedCircle={true} ></Image>:null}
                {/* <Link className="nav-link menulink" to="/create">create</Link> */}
                {/* {this.state.loggedIn?<Link className="nav-link menulink" to="/logout">logout</Link>:<Link className="nav-link menulink" to="/login">login</Link>} */}
                
              </Nav>

            </NavBar.Collapse>
        </NavBar>
        <NavBarComponent links={['Characters', 'Deck', 'Cards' ,'Notes','Games' ,]}/>
        <Routes>
          <Route path='/mainpage' exact element={<MainPage /> }/>
          <Route path='/' exact element={<MainPage/> }/>
          <Route path='/card-editor' exact element={<CardMakerPage/> }/>
          <Route path='/registration' exact element={<Registration /> }/>
          <Route path='/login' exact element={<Login  setUserIcon={setUserIcon} setLoggedIn={setLoggedIn}/> }/>
          <Route path='/logout' exact element={<Logout setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
          <Route path='/cards' exact element={<Cards setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
          <Route path='/characters' exact element={<Characters setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
          <Route path='/characters/:id' element={<CharacterView setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
          <Route path='/deck' element={<Deck setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
          <Route path='/deck/:id' element={<DeckView setUserIcon={setUserIcon} setLoggedIn={setLoggedIn} /> }/>
        </Routes>

        <Footer/>
      </Container>
    </Router>
    // <div /* className="App" */>
      
      
    // </div>
  );
}

export default App;
