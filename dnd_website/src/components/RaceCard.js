import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const RaceCard = (props) => {
  
  return(
    <div>
      Race card works !!!
      <Row>
        <Col sm="1">
          <img style={{height:'50px',width:'50px'}} src='https://www.dndbeyond.com/avatars/9/360/636327455597709803.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp'/>
        </Col>
        <Col>
          <Row>
            <Col><h3>Aarakocra</h3></Col>
            <Col className="mt-2 mb-2" style={{backgroundColor:'lightgray',borderRadius:'5px'}}>Legacy</Col>
          </Row>
          <Row>
            <p>Elemental Evil Player's Companion</p>
          </Row>
        </Col>
      </Row>
    </div>
  )
  
}

export default RaceCard;