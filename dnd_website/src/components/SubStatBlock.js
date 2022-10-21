import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const SubStatBlock = (props) => {

  return (
    <Container fluid={true} className="sub-stat">
      <Row>
        <Col className='t-center bo0rders-red' sm={2}>
          <Col className='fs-7 mt-2'>INITIATIVE</Col>
          <div className='ms-2 borders-red-rounded bg-white'>
            <Col className='fs-7'><h2>+{2}</h2></Col>
          </div>
        </Col>

        <Col className='t-center bord0ers-red bg-white' sm={2}>
          <div className='borders-red-rounded '>
            <Col className='mt-2' style={{fontSize:'10px'}}>ARMOR</Col>
            <Col><h2 className='mb-0'>+{15}</h2></Col>
            <Col className='mb-2' style={{fontSize:'10px'}}>CLASS</Col>
          </div>
        </Col>

        <Col className='borders-red bg-white' sm={8}>
          <Row>
            <Col>
              <Col style={{fontWeight:'bold'}} className='fs-7 mt-2'>DEFENCES</Col>
              <Col style={{fontSize:'12px'}}><span>R </span>{'Lightning'}</Col>
            </Col>
            <Col className="border-lefte">
              <Col style={{fontWeight:'bold'}} className='fs-7 mt-2'>CONDITIONS</Col>
              <Col style={{fontSize:'12px',color:'gray'}}>Add Active Contditions</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )

}

export default SubStatBlock