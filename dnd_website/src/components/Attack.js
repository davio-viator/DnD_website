import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Attack = (props) => {

  return(
    <Row className='mt-3'>
      <Col sm="1">{props.icon}</Col>
      <Col className='fs-7' sm="3">{props.item_name}
        {props.item_type!==''?<Row style={{fontSize:'11px',color:'gray'}} className="ms-0">{props.item_type}</Row>:null}
      </Col>
      <Col className='fs-7' sm="1">{props.range}
        {props.range_type?<Row style={{fontSize:'11px',color:'gray'}} className="ms-0">{props.range_type}</Row>:null}
      </Col>
      <Col className='fs-7' sm="2">{props.hit_dice}</Col>
      <Col className='fs-7' sm="2">{props.damage} </Col>
      <Col className='fs-7' sm="3">{props.notes}</Col>
    </Row>
  )

}

export default Attack