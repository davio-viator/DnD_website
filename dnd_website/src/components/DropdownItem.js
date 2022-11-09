import React, { useState } from 'react';

import arrow from '../assets/images/arrow.svg';


const DropdownItem = (props) => {

  const [isActive,setIsActive] = useState(false)

  function handleClick(e){
    setIsActive(!isActive)
  }

  return(
    <div className='mt-3 mb-3'>
      <div onClick={(e) => handleClick(e)} className={isActive ? 'dropdown-item-header-active' : 'dropdown-item-header'}>
        <span>{props.title}</span>
        <span><img className={!isActive? '':'reverse'} style={{width:'16px'}} src={arrow}/></span>
      </div>
      {isActive?
      <div className='dropdown-item-content'>
        {!props.array?<span>{props.contenue}</span>:<></>}
      </div>
      :null
      }
      
    </div>
  )

}

export default DropdownItem;

