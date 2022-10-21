import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Spell = (props) => {

  // console.table(props);

  let textToDisplay;

  function splitText (){
    let textArray = props.text.split(' ')
    textToDisplay = textArray;
  }

  splitText()
  return(
    <Row className='mt-2 me-0'>
      <Col sm="1" style={{fontSize:'12px',color:'gray'}} className="mgt-1 t-center">{textToDisplay[0]}
        {textToDisplay[1]!==''?<Row style={{fontSize:'11px',color:'gray'}} className="ms-2 t-center">{textToDisplay[1]}</Row>:null}
      </Col>
      <Col className='fs-7' sm="3">{props.name}
        {props.item_type!==''?<Row style={{fontSize:'11px',color:'gray'}} className="ms-0">{props.item_type}</Row>:null}
      </Col>
      <Col className='fs-7' sm="1">{props.time}</Col>
      <Col className='fs-7' sm="1">{props.range}
        {props.range_type?<Row style={{fontSize:'11px',color:'gray'}} className="ms-0">{props.range_type}</Row>:null}
      </Col>
      <Col className='fs-7' sm="1">{props.hit_dice}</Col>
      <Col className='fs-7' sm="2">{props.effect} </Col>
      <Col className='fs-7' sm="3">{props.notes}</Col>
      {!props.last?<hr style={{color:'#939393',marginTop:'2px'}}/>:null}
    </Row>
  )

}

export default Spell