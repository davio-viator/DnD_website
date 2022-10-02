import Button from "react-bootstrap/Button";
import React,{ Fragment, useState } from "react";

import FrontCard from './FrontCard';
import RearCard  from './RearCard';
// import { Button } from "react-bootstrap/Button";


const Card = (props) =>{

  const [flip,setFlip] = useState(false)

  function handleCard(){
  
  
    if(!flip)return <FrontCard  values={props}/>
    else return <RearCard values={props}/>
  }

  function handleFlip(){
    setFlip(!flip)
  }


  return (
    <div className={props.className}>
      {handleCard()}
      {/* <FrontCard values={props}></FrontCard>
      <RearCard values={props}></RearCard> */}
      <Button className='buttons ms-3' onClick={handleFlip}>Flip</Button>
    </div>
  )
}

export default Card;