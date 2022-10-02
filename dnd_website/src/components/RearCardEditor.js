import React from 'react'


// import CardInfo from './CardInfo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';


const RearCard = (props) =>{


    function handleStrenght(){
        let string = props.value.item.strenght+""
        // console.log(string)
        let array = string.split("/")
        array = string.split(",")

        let value = "";

        for(var item in array){
            // console.log(array)
            value+="• "+array[item]+"\n";
        }
        return value
    }

    function handleWeakness(){
        let string = props.value.item.weakness+""
        let array = string.split("/")
        array = string.split(",")

        let value = "";

        for(var item in array){
            // console.log(array)
            value+="• "+array[item]+"\n";
        }
        return value
    }

    function handleCommas(){
        let test = document.getElementById("test1");
        if(test!=null){
            if(test.value.includes(',')){
                test.value = test.value.replaceAll(',','');
                // console.log(test.value)
            }
        }
        return "";
        
    }

    
    return(
        <div className="d-inline-block  d-card rearCard2 top-round w25rem ">
            <Row className="">
                <Col className="ligne top-round">
                    <h3 className="gauche ps-2">Ecology</h3>
                    {/* <Form.Control className="case paddingbottom" plaintext value={props.value.item.ecology} type="text" placeholder="Ecology" readOnly /> */}
                    <Form.Control  className="case texte"  value={props.value.item.ecology} as="textarea" rows={6} readOnly/>
                    
                </Col>
            </Row>
            <Row>
                <Col >
                    <h3 className="gauche ps-2">Strenght</h3>
                    <Form.Control id="test1" className="case texte" value={handleStrenght()} as="textarea" rows={6} readOnly/>              
                   
                </Col>
            </Row>
            <Row className="bottom-round ">
                <Col >
                    <h3 className="gauche ps-2">Weakness</h3>
                    <Form.Control id="test" className="case texte" value={handleWeakness()} as="textarea" rows={6} readOnly/>
                </Col>
            </Row>
            
             
        </div>    
    )
}

export default RearCard;