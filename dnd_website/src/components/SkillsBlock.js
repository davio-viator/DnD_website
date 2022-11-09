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
      'INT',
      'Invevstigation',
      '+0',
      false
    ],
    10: [
      'WIS',
      'Medecine',
      '+6',
      true
    ],
    11: [
      'INT',
      'Nature',
      '+0',
      false
    ],
    12: [
      'WIS',
      'Perception',
      '+3',
      false
    ],
    13: [
      'CHA',
      'Performance',
      '+1',
      false
    ],
    14: [
      'CHA',
      'Persuasion',
      '+1',
      false
    ],
    15: [
      'INT',
      'Religion',
      '+3',
      true
    ],
    16: [
      'DEX',
      'Sleight of hands',
      '+2',
      false
    ],
    17: [
      'DEX',
      'Stealth',
      '+2',
      false
    ],
    18: [
      'WIS',
      'Survival',
      '+2',
      false
    ],
  }


  function handleSkils(){
    let array = Object.entries(stats)
    return array.map((item,index) => {
      let bonus = props.stats[props.skills[index+1].modifier].modifier
      if(props.skills[index+1].proficient) bonus += props.proficiency
      return(
        <Skill key={index} prof={props.skills[index+1].modifier} name={props.skills[index+1].skill} bonus={bonus} proficiency={props.skills[index+1].proficient} />
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
      <div style={{color: '#838383',fontSize:'12px'}} className="position-relative t-center mt-2 mb-2"><pre> </pre></div>   
      <div className="position-relative t-center mb-4 ">Skills</div>  
    </Container>
  )

}

export default SkilsBlock;