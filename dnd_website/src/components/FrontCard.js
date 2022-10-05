import { React } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import Card from 'react-bootstrap/Card';

const FrontCard = (props) => {

  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  function handleKeyWord1(){
    let string = props.values.keywords+""
    let array = string.split(",")
    return array.map((item,index)=>{
        return (  
            <Col className='t-center card-font-size pb-1' key={index}>{capitalize(item)}</Col>
        )
    })
  }

  function handleKeyWord2(){
    let string = props.values.keywords+""
    let array = string.split(",")
    return array.map((item,index)=>{
        return (  
            <li style={{display:'inline-block',padding:'0 0.5rem',textAlign:'center'}} className='t-center card-font-size pb-1' key={index}>{capitalize(item)} </li>
        )
    })
  }

  return(
    <div className="d-inline-block d-card  w25rem">
      {/* <div className="graybg2 top-round">
        <h4 className="gauche ps-3 pt-2">{props.values.name}</h4>
        <h4 className="droite pe-3 pt-2">{props.values.rank}</h4>
      </div>
      <img className="d-card-image2 card-border" src={props.values.iconSrc}></img>
      <Container className="graybg w25rem card-bottom-height overflowAuto bottom-round">
          <Row className="w25rem">
              {handleKeyWord1()}
          </Row>   
      </Container> */}
      <Card bg='dark' variant='Dark' key='Dark' text="light">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>{props.values.name}</Card.Title>
          <Card.Title>{props.values.rank}</Card.Title>
        </Card.Header>
        <Card.Img style={{backgroundColor:'white'}} className="d-card-image2" src={props.values.iconSrc}></Card.Img>
        <Card.Footer className="card-bottom-height-bs overflowAuto alter-scroll-bar">
          <ul  style={{listStyle:'none',paddingInlineStart: '0px',marginBottom:'5px',marginBottom:'-2px'}}>
            {handleKeyWord2()}
          </ul>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default FrontCard;