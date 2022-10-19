import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AttackBlock = (props) => {
  
  return(
    <div className='ms-3 me-3'>
      <Row>
        <Col sm="1"></Col>
        <Col sm="3">ATTACK</Col>
        <Col sm="1">RANGE</Col>
        <Col sm="2">HIT/DC</Col>
        <Col sm="2">DAMAGE</Col>
        <Col sm="3">NOTES</Col>
      </Row>
      <Row className='mt-3'>
        <Col sm="1">X</Col>
        <Col sm="3">Mace
          <Row style={{fontSize:'11px',color:'gray'}} className="ms-0">Melee weapon</Row>
        </Col>
        <Col sm="1">5 ft
          <Row style={{fontSize:'11px',color:'gray'}} className="ms-0">reach</Row>
        </Col>
        <Col sm="2">+4</Col>
        <Col sm="2">1d6+1 </Col>
        <Col sm="3">Simple</Col>
      </Row>
      <Row className='mt-3'>
        <Col sm="1">O</Col>
        <Col sm="3">Inflict Wounds
          <Row style={{fontSize:'11px',color:'gray'}} className="ms-0">1st Level · Cleric</Row>
        </Col>
        <Col sm="1">touch</Col>
        <Col sm="2">+6</Col>
        <Col sm="2">3d10</Col>
        <Col sm="3">V/S</Col>
      </Row>
      <Row className='mt-3'>
        <Col sm="1">K</Col>
        <Col sm="3">Unarmed Strike
          <Row style={{fontSize:'11px',color:'gray'}} className="ms-0">Melle Attack</Row>
        </Col>
        <Col sm="1">5 ft
          <Row style={{fontSize:'11px',color:'gray'}} className="ms-0">Reach</Row>
        </Col>
        <Col className='t-center' sm="2">+4</Col>
        <Col sm="2">2</Col>
        <Col sm="3"></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm="1">X</Col>
        <Col sm="3">Breath Weapon (Blue)</Col>
        <Col sm="1">30 ft</Col>
        <Col sm="2">13 DEX</Col>
        <Col sm="2">2d6</Col>
        <Col sm="3">1/SR</Col>
      </Row>
    </div>
  )

}

export default AttackBlock;