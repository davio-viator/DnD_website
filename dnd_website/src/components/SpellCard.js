import React, { useState } from 'react';

import Button from 'react-bootstrap/esm/Button';

import arrow from '../assets/svgs/arrow.svg';

const SpellCard = (props) => {

  const [learned,setLearned] = useState(false)
  const [isActive,setIsActive] = useState(false)

  function handleClick(e){
    setLearned(!learned)
  }

  function handleShowSpell(e){
    if(!['Learn','Remove'].includes(e.target.innerText)) {
      setIsActive(!isActive)
      return
    }
  }

  function formatContent(content){
    let newContent = 5
    return content.split('`').map((item,index)=>{
      let subContent = item.split('^').map((subitem,subindex)=>{
        if(subitem.length>0) return <li key={subindex}>{subitem}</li>
      })
      return <div key={'`'+index}>{!item.includes('`')?<p key={index}>{item}</p>:<ul key={index}>{subContent}</ul>}</div>
    })
    return content
  }

  function tedgqfg(){
    let spellsContent = [...document.getElementsByClassName('lst--border lst__row-inner')]
    let x = {}
    spellsContent.forEach((item,index)=> {        
      x[item.children[0].innerText] = {name:item.children[0].innerText,level:item.children[1].innerText,time:item.children[2].innerText,school:item.children[3].innerText,concentration:item.children[4].innerText=='×',range:item.children[5].innerText}
    })
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

  function displayProperties(content){
    return Object.keys(content).map((item,index)=>{
      return(
        <div key={item+index}>
          <span key={item} style={{fontWeight:'bold'}}>{item.replace('__','/').replace('_',' ')}: </span><span key={index}>{content[item]}</span>
        </div>
      )
    })
  }

  function displayTags(content){
    return content.map((item,index)=>{
      return(
        <span key={index} className='tags'>{item}</span>
      )
    })
  }

  return(
    <>
      <div onClick={(e)=>handleShowSpell(e)} className={isActive ? 'dropdown-item-header-active' : 'dropdown-item-header'} style={{alignItem:'center',display:'flex'}}>
        <div className={`spells-icon ${props.school}`}></div>

        <div style={{flex:'1 1',minWidth:'0'}}>
          <div>{props.name}</div>
          <div style={{fontSize:'12px',color:'gray'}}>{props.level}</div>
        </div>

        <div>
          {!learned?
            <Button onClick={(e)=>handleClick(e)} variant={learned?'':'outline-success'}>Learn</Button>
          :<>
            <div onClick={(e)=>handleClick(e)} style={{alignItems:'center',cursor:'pointer',display:'flex',fontSizge:'12px',marginTop:'8px'}}>
              <span style={{height:'24px',position:'relative',width:'24px'}} className="exit-red" ></span>
              Remove
            </div>
          </>}
        </div>
        <img onClick={(e)=> handleShowSpell(e)} className={!isActive? 'ms-2 me-2':'reverse ms-2 me-2'} style={{width:'16px'}} src={arrow}/>
      </div>
    
      <div>
        {isActive?
        <div className='dropdown-item-content'>
          {/* {!props.array?<span>{formatContent(props.contenue)}</span>:<>{displayContentArray(props.contenue)}</>} */}
          <p className='mt-2' style={{fontStyle:'italic'}}>{props.school} {props.level}</p>
          <hr/>
          <div className='mt-2'>
            {displayProperties(props.properties)}
          </div>
          <hr/>
          <div>
            {formatContent(props.contenue)}
          </div>
          <hr/>
          <div style={{fontWeight:'bold'}} className='mt-2 mb-3'>
            TAGS: {displayTags(props.tags)}
          </div>
        </div>
        :null
        }
      </div>
    </>
  )

}

export default SpellCard