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
        return(
          <div key={index}>
            <span key={item} style={{fontWeight:'bold'}}>{item}: </span>
            <span key={index+item}>{content[item]}</span>
          </div>
        )
      }
    })
  }

  function formatContent(content){
    // console.log(content,content.split('`'));
    return content.split('\n\n').map((item,index)=>{
      let subContent = item.split('^').map((subitem,subindex)=>{
        if(subitem.length>0) return <li key={subindex+'^'}>{subitem}</li>
      })
      return <div key={item+"'"}>{!item.includes('^')?<p key={index}>{item}</p>:<ul key={index}>{subContent}</ul>}</div>
    })
    // return newContent.split('^').map((item,index,test)=>{
    //   return <ul key={index}>{item}</ul>
    // })
    return content
  }

  return(
    <div className='mt-3 mb-3'>
      <div onClick={(e) => handleClick(e)} className={isActive ? 'dropdown-item-header-active' : 'dropdown-item-header'}>
        <span>{props.title}</span>
        <span><img className={isActive? '':'reverse'} style={{width:'16px'}} src={arrow}/></span>
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

