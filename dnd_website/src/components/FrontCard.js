import { React } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

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

  return(
    <div className="d-inline-block d-card  w25rem">
      {/* <p>FrontCard</p> */}
      <div className="graybg2 top-round">
        <h4 className="gauche ps-3 pt-2">{props.values.name}</h4>
        <h4 className="droite pe-3 pt-2">{props.values.rank}</h4>
      </div>
      <img className="d-card-image2 card-border" src={props.values.iconSrc}></img>
      <Container className="graybg w25rem card-bottom-height overflowAuto bottom-round">
          <Row className="w25rem">
              {handleKeyWord1()}
          </Row>   
      </Container>
    </div>
  )
}

export default FrontCard;