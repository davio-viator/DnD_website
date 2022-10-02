import React from "react";

import {useNavigate }  from 'react-router-dom';

const NavBar = (props) => {

  const navigate = useNavigate();

  function handleClick(link){
    console.log("hi",link);
    navigate(link)
  }

  function createLinks(){
    let items = props.links
    return items.map((item,index)=>{
      let href = '/'+item.toLowerCase()
      return (
        <li key={index} className='main-page-menu-item'>
          <span onClick={(e) => {handleClick(href)}} className='main-page-menu-item-label'>
            {item}          
          </span>
        </li>
      )
    })
  }

  return(
    <div className="banner">
      <div className='main-page-menu'>
        <nav className='main-page-nav-bar'>
          <div className='main-page-menu-container'>
            <ul className='main-page-menu-list'>
              {createLinks()}
            </ul>
          </div>
        </nav>
        </div> 
    </div>
  )

}

export default NavBar;