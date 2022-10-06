import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

const HealthBlock = (props) => {
  return(
    <div className="d-flex">
      <div className="health-block-left ps-3">
        <Button className="t-center-i heal" variant="outline-success" size="sm" >HEAL</Button>
        <Form.Control className="t-center"></Form.Control>
        <Button variant="outline-danger" size="sm">DAMAGE</Button>
      </div>
      <Container>
        <Row>
          <Form.Group as={Row}>
            <Form.Label  column>CURRENT</Form.Label>
            <Col ><Form.Control  className="t-center" value={props.current}></Form.Control></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label  column>MAX</Form.Label>
            <Col  ><Form.Control  className="t-center" value={props.max}></Form.Control></Col>
          </Form.Group>
        </Row>
      </Container>
    </div>
  )
}

export default HealthBlock