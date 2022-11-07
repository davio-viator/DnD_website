import Button from "react-bootstrap/Button";
import React,{ Fragment, useState } from "react";

import FrontCard from './FrontCard';
import RearCard  from './RearCard';
import Notes from "./Notes";
// import { Button } from "react-bootstrap/Button";


const Card = (props) =>{

  const [flip,setFlip] = useState(false)
  const [noteVisible,setNoteVisible] = useState(true)

  function handleCard(){ 
    if(!flip)return <FrontCard  values={props}/>
    else return <RearCard values={props}/>
  }

  function handleNotes(){
    
    
  }

  function handleFlip(){
    setFlip(!flip)
  }
  function handleFlipNotes(){
    setNoteVisible(!noteVisible)
  }

  function handleNotesClick(){
    props.setId(props.id)
    props.setNoteVisibleprops(noteVisible)
    handleFlipNotes()
    // props.handleNotes()
  }


  return (
    <div className={props.className}>
      {handleCard()}
      {/* {handleNotes()} */}
      {/* <FrontCard values={props}></FrontCard>
      <RearCard values={props}></RearCard> */}
      <div className="d-flex">
        <Button className='buttons ms-3 me-4' onClick={handleFlip}>Flip</Button>
        <Button onClick={handleNotesClick} >Notes</Button>
      </div>
    </div>
  )
}

export default Card;