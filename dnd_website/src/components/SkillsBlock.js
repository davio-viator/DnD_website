import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Skill from "./Skill";


const SkilsBlock = (props) => {

  let stats = {
    1: [
      'DEX',
      'Acrobatics',
      '+2',
      false
    ],
    2: [
      'WIS',
      'Animal Handling',
      '+3',
      false
    ],
    3: [
      'INT',
      'Arcana',
      '+3',
      true
    ],
    4: [
      'STR',
      'Athletics',
      '+1',
      false
    ],
    5: [
      'CHA',
      'Deception',
      '+1',
      false
    ],
    6: [
      'INT',
      'History',
      '+3',
      true
    ],
    7: [
      'WIS',
      'Insight',
      '+3',
      false
    ],
    8: [
      'CHA',
      'Intimidation',
      '+1',
      false
    ],
    9: [
      'WIS',
      'Medecine',
      '+6',
      true
    ],
    10: [
      'INT',
      'Nature',
      '+0',
      false
    ],
    11: [
      'WIS',
      'Perception',
      '+3',
      false
    ],
    12: [
      'CHA',
      'Performance',
      '+1',
      false
    ],
    13: [
      'CHA',
      'Persuasioon',
      '+1',
      false
    ],
    14: [
      'INT',
      'Religion',
      '+3',
      true
    ],
    15: [
      'DEX',
      'Sleight of hands',
      '+2',
      false
    ],
    16: [
      'DEX',
      'Stealth',
      '+2',
      false
    ],
    17: [
      'WIS',
      'Survival',
      '+2',
      false
    ],
  }


  function handleSkils(){
    let array = Object.entries(stats)
    return array.map((item,index) => {
      return(
        <Skill key={index} prof={item[1][0]} name={item[1][1]} bonus={item[1][2]} proficiency={item[1][3]} />
      )
  })
  }


  return(
    <Container fluid={true} className="skills border-red-saving-throw">
      <Row className="t-center fs-7 mt-2">
        <Col className="me-2" sm="1">prof</Col>
        <Col sm="2">mod</Col>
        <Col sm="6">skill</Col>
        <Col>bonus</Col>
      </Row>
      {handleSkils()}
      <div style={{color: '#838383',fontSize:'12px'}} className="position-relative t-center mt-3 mb-2"><pre> </pre></div>   
      <div className="position-relative t-center mb-4 ">Skills</div>  
    </Container>
  )

}

export default SkilsBlock;