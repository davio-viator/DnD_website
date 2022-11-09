import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const RaceCard = (props) => {

  function handleCLick(){
    props.setDisplayed(true)
    props.handler()
  }
  
  return(
    <div onClick={() => handleCLick()} className='mt-2' style={{border:'1px solid #ccc',borderRadius:'8px',width:'98%',cursor:'pointer'}}>
      <Row className='mt-3 ms-2'>
        <Col sm="1">
          <img style={{height:'60px',width:'60px'}} src={props.src} alt={props.name}/>
        </Col>
        <Col>
          <Row >
            <Col className="mb-0" style={{maxWidth:'fit-content'}}><h3>{props.name}</h3></Col>
            {props.legacy?<Col className="mt-2 mb-2" style={{backgroundColor:'lightgray',borderRadius:'5px',maxWidth:'fit-content'}}>Legacy</Col>:null}
          </Row>
          <Row>
            <p>{props.source}</p>
          </Row>
        </Col>
      </Row>
    </div>
  )
  
}

export default RaceCard;