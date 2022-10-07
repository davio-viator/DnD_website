import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

const Senses = (props) => {
    return(
        <Container className="saving-throws border-red-saving-throw">
            <Row className="mt-4 mb-1">
                <Col className="border-red-saving-throw ps-0 ms-3" sm="2"><span className="ms-2">+{Math.floor(Math.random()*10+10)}</span></Col>
                <Col className="senses-text" sm="9">PASSIVE WIS (PERCEPTION)</Col>
            </Row>
            <Row className="mb-1">
                <Col className="border-red-saving-throw ps-0 ms-3" sm="2"><span className="ms-2">+{Math.floor(Math.random()*10+10)}</span></Col>
                <Col className="senses-text" sm="9">PASSIVE INT (INVESTIGATION)</Col>
            </Row>
            <Row className="">
                <Col className="border-red-saving-throw ps-0 ms-3" sm="2"><span className="ms-2">+{Math.floor(Math.random()*10+10)}</span></Col>
                <Col className="senses-text" sm="9">PASSIVE WIS (INSIGHT)</Col>
            </Row>
            <div style={{color: '#838383',fontSize:'12px'}} className="t-center mt-3 mb-3">Additional Sense Types</div>
            <div className="t-center mt-3 mb-3">Senses</div>
        </Container>
    )
}

export default Senses;