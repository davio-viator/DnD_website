import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

const SavingThrowsBlock = (props) => {
    return(
        <Container className="saving-throws border-red-saving-throw">
            {/* SavingThrowsBlock works !!! */}
            <Row className="ms-4 mt-3">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={false} type='checkbox'></input></Col>
                <Col sm="2">STR</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked={false} type='checkbox'></input></Col>
                <Col sm="2">INT</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>
            </Row>   
            <Row className="ms-4">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={false} type='checkbox'></input></Col>
                <Col sm="2">DEX</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked type='checkbox'></input></Col>
                <Col sm="2">WIS</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>
            </Row>   
            <Row className="ms-4">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={false} type='checkbox'></input></Col>
                <Col sm="2">CON</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked type='checkbox'></input></Col>
                <Col sm="2">CHA</Col>
                <Col sm="2"><span className="ms-2">+{Math.floor(Math.random()*6)}</span></Col>
            </Row>
            <div style={{color: '#838383',fontSize:'12px'}} className="position-relative t-center mt-3 mb-2 ">Saving Throws Modifiers</div>   
            <div className="position-relative t-center mb-4 ">Saving Throws</div>   
        </Container>
    )
}

export default SavingThrowsBlock