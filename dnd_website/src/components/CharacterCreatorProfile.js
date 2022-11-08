import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";

import randomWord from 'random-words';

const CharacterCreatorProfile = (props) => {

  const [name,setName] = useState(localStorage.getItem('username')+"'s character")

  function handleIconUpload(){
    props.setDisplayed(true)
  }

  function handleCharacterNameChange(e){
    setName(e.target.value)
  }

  function getRandomName(){
    setName(randomWord())
  }

  console.log(props);
  
  return(
    <div className='character-creator-profile'>
      <Row>
        <Col className="mt-3 character-creator-profile-icon-container" sm="2">
          {!props.imgsrc?
          <div className='character-creator-profile-icon-none' onClick={handleIconUpload} />:
          <div className='character-creator-profile-icon' style={{backgroundImage:`url(${props.imgsrc})`}} onClick={handleIconUpload} />}
        </Col>
        <Col className='mt-3'>
          <Row>
            <Col>
              <Form.Label>Character's name</Form.Label>
            </Col>
            <Col>
              <span onClick={getRandomName} style={{color:'blue',cursor:'pointer'}}>Randomize</span>
            </Col>
          </Row>
          <Form.Group style={{width:'73%'}} as="input" onChange={(e) => handleCharacterNameChange(e)} value={name}></Form.Group>
        </Col>
      </Row>
    </div>
  )

}

export default CharacterCreatorProfile