import React from 'react'


// import CardInfo from './CardInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FrontCardEditor = (props) =>{

    let mem = new Array(7)

    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
      }

    function handleKeyWord1(){
        let string = props.value.item.keyword+""
        let array = string.split(",")
            return array.map((item,index)=>{
                return (  
                    <Col className='t-center card-font-size' key={index}>{capitalize(item)}</Col>
                )
            })
    }
    
    return(
        <div className="d-inline-block  d-card top-round w25rem">
            <div className="graybg2 top-round ">
                <h4 className="gauche ps-3 pt-2">{props.value.item.name}</h4>
                <h4 className="droite pe-3 pt-2">{props.value.item.rank}</h4>
            </div>
            <img  className="d-card-image2 card-border" src={props.value.item.imgSrc} /* alt={props.value.item.imgSrc.substring(0,30) } */ ></img>
            <Container className="graybg w25rem card-bottom-height overflowAuto bottom-round">
                <Row className="w25rem">
                    {handleKeyWord1()}
                </Row>   
            </Container>
        </div>    
    )
}

export default FrontCardEditor;