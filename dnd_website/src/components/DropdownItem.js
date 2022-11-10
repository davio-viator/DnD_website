import React, { useState } from 'react';

import arrow from '../assets/svgs/arrow.svg';


const DropdownItem = (props) => {

  const [isActive,setIsActive] = useState(false)

  function handleClick(e){
    setIsActive(!isActive)
  }

  function displayContentArray(content){
    // console.log(content)
    return Object.keys(content).map((item,index)=>{
      if(item!='level'){
        console.log(item,content[item])
        return(
          <div>
            <span style={{fontWeight:'bold'}}>{item}: </span>
            <span>{content[item]}</span>
          </div>
        )
      }
    })
  }

  function formatContent(content){
    let newContent = 5
    return content.split('\n\n').map((item,index)=>{
      let subContent = item.split('`kik`').map((subitem,subindex)=>{
        if(subindex>0) return <li key={subindex}>{subitem}</li>
      })
      return <>{!item.includes('`kik`')?<p key={index}>{item}</p>:<ul key={index}>{subContent}</ul>}</>
    })
    console.log(newContent)
    // return newContent.split('`kik`').map((item,index,test)=>{
    //   return <ul key={index}>{item}</ul>
    // })
    return content
  }

  return(
    <div className='mt-3 mb-3'>
      <div onClick={(e) => handleClick(e)} className={isActive ? 'dropdown-item-header-active' : 'dropdown-item-header'}>
        <span>{props.title}</span>
        <span><img className={!isActive? '':'reverse'} style={{width:'16px'}} src={arrow}/></span>
        {/* {props.subtitle?<>{props.subtitle}</>:null} */}
      </div>
      {isActive?
      <div className='dropdown-item-content'>
        {!props.array?<span>{formatContent(props.contenue)}</span>:<>{displayContentArray(props.contenue)}</>}
      </div>
      :null
      }
      
    </div>
  )

}

export default DropdownItem;

