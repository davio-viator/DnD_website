import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

const SavingThrowsBlock = (props) => {

    let values = props.values;

    return(
        <Container className="saving-throws border-red-saving-throw">
            {/* SavingThrowsBlock works !!! */}
            <Row className="ms-4 mt-3">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.str.proficient} type='checkbox'></input></Col>
                <Col sm="2">STR</Col>
                <Col sm="2"><span className="ms-2">+{values.str.value}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.int.proficient} type='checkbox'></input></Col>
                <Col sm="2">INT</Col>
                <Col sm="2"><span className="ms-2">+{values.int.value}</span></Col>
            </Row>   
            <Row className="ms-4">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.dex.proficient} type='checkbox'></input></Col>
                <Col sm="2">DEX</Col>
                <Col sm="2"><span className="ms-2">+{values.dex.value}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.wis.proficient} type='checkbox'></input></Col>
                <Col sm="2">WIS</Col>
                <Col sm="2"><span className="ms-2">+{values.wis.value}</span></Col>
            </Row>   
            <Row className="ms-4">
                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.con.proficient} type='checkbox'></input></Col>
                <Col sm="2">CON</Col>
                <Col sm="2"><span className="ms-2">+{values.con.value}</span></Col>

                <Col sm="1"><input className="proficiency me-3" readOnly checked={values.cha.proficient} type='checkbox'></input></Col>
                <Col sm="2">CHA</Col>
                <Col sm="2"><span className="ms-2">+{values.cha.value}</span></Col>
            </Row>
            <div style={{color: '#838383',fontSize:'12px'}} className="position-relative t-center mt-3 mb-2 ">Saving Throws Modifiers</div>   
            <div className="position-relative t-center mb-4 ">Saving Throws</div>   
        </Container>
    )
}

export default SavingThrowsBlock