import React from 'react';

const ClassCard = (props) => {

  function handleCLick(){
    props.setDisplayed(true)
    props.handler()
  }

  return(
    <div onClick={() => handleCLick()} style={{border:'1px solid #ccc',borderRadius:'8px',width:'98%',cursor:'pointer',padding:'8px',marginTop:'5px',marginBottom:'5px'}}>
      <img style={{height:'40px',width:'40px'}} src={props.src}/>
      <span style={{marginLeft:'8px',fontWeight:'bold'}}>{props.title}</span>
    </div>
  )

}

export default ClassCard;