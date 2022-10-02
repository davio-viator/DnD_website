import { React } from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

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
    <div className="d-inline-block d-card rearCard2 top-round w25rem">
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
          <Form.Control className="case texte" value={handleWeakness()} as="textarea" rows={6} readOnly/>
        </Col>
      </Row>
    </div>
  )
}

export default RearCard;