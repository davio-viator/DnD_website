import React, { useEffect } from "react";

import {useNavigate }  from 'react-router-dom';

const Logout = (props) => {

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      sessionStorage.removeItem('loggedIn');
      sessionStorage.removeItem('iconSrc');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('jwt_token');
      localStorage.removeItem('jwt_token')
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('userId')
      props.setUserIcon('')
      props.setLoggedIn(false)
      navigate('/login')
    },0)
  },[])

}

export default Logout;