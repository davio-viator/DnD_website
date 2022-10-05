import { React } from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const RearCard = (props) => {

  function handleStrenght(){
    let string = props.values.strenght+""
    // console.log(string)
    let array = string.split("/")
    array = string.split(",")

    let value = "";

    // for(var item in array){
    //     // console.log(array)
    //     value+="• "+array[item]+"\n";
    // }
    for (let i = 0; i < array.length; i++) {
      if(i+1<array.length)value+= "• "+array[i]+"\n";      
      else value+= "• "+array[i];      
    }
    return value
}

function handleWeakness(){
    let string = props.values.weakness+""
    let array = string.split("/")
    array = string.split(",")

    let value = "";

    // for(var item in array){
    //     // console.log(array)
    //     value+="• "+array[item]+"\n";
    // }
    for (let i = 0; i < array.length; i++) {
      if(i+1<array.length)value+= "• "+array[i]+"\n";      
      else value+= "• "+array[i];      
    }
    return value
}

  return(
    <div className="d-inline-block d-card rearCard2 top-round w25rem bottom-round">
      <Row>
        <Col className="ligne top-round">
          <h3 className="gauche ps-2">Ecology</h3>
          <Form.Control className="case texte" value={props.values.ecology} as="textarea" rows={6} readOnly/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="gauche ps-2">Strenght</h3>
          <Form.Control className="case texte" value={handleStrenght()} as="textarea" rows={6} readOnly/>
        </Col>
      </Row>
      <Row>
        <Col className="bottom-round">
          <h3 className="gauche ps-2">Weakness</h3>
          <Form.Control className="case bottom-round texte " value={handleWeakness()} as="textarea" rows={6} readOnly/>
        </Col>
      </Row>
      {/* <Card bg='dark' variant='Dark' key='Dark' text="light">
        <Card.Header>
          <Card.Title >Ecology</Card.Title>
        </Card.Header>
        <Card.Subtitle text="dark" className="case texte ps-3 pe-3 pb-2 overflow">
          {props.values.ecology}
        </Card.Subtitle>

        <Card.Header>
          <Card.Title >Strenght</Card.Title>
        </Card.Header>
        <Form.Control className="case texte" value={handleStrenght()} as="textarea" rows={6} readOnly/>

        <Card.Header>
          <Card.Title >Weakness</Card.Title>
        </Card.Header>
        <Form.Control className="case texte" value={handleWeakness()} as="textarea" rows={6} readOnly/>
      </Card> */}
    </div>
  )
}

export default RearCard;