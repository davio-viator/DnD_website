import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const Skill = (props) => {
  return(
    <>
      <Row className="t-center fs-7 mt-2">
        <Col sm="2"><input className="proficiency " readOnly checked={props.proficiency} type='checkbox'></input></Col>
        <Col sm="2">{props.prof}</Col>
        <Col sm="5">{props.name}</Col>
        <Col>{props.bonus}</Col>
      </Row>
      <hr className="mb-1 mt-2 pb-1"/>
    </>
  )
}

export default Skill;