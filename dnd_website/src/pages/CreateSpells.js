import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import FormHeader from '../components/FormHeader';
import Button from 'react-bootstrap/esm/Button';

const CreateSpell = (props) => {

  const firstname = 'Toll the dead'
  const default_desc = 'You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.';

  const tags = [
  "DAMAGE",
  "CONTROL",
  "UTILITY",
  "DEBUFF",
  "COMMUNICATION",
  "SOCIAL",
  "FOREKNOWLEDGE",
  "WARDING",
  "DETECTION",
  "SHAPECHANGING",
  "MOVEMENT",
  "BUFF",
  "EXPLORATION",
  "SUMMONING",
  "ENVIRONEMENT",
  "DECEPTION",
  "CREATION",
  "TELEPORTATIO"
  ]

  const [spellState,setSpellState] = useState(
    {name:'',
    level:'',
    school:'',
    properties:{},
    description:'',
    tags:[]}
    )

  function displayTags(){
    return tags.map((item,index)=>{
      return  <Form.Check
      key={index}
      inline
      label={item}
      name="group1"
      type='checkbox'
      id={`inline-${item}-1`}
    />
    })
  }

  return(
    <Container className='mt-5'>
      <Row>
        <FormHeader title="Spell Creator Form" />
        <Form className="buttongclr registration-form ps-5 ">
          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">Name</Form.Label>
            <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder={firstname} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">level</Form.Label>
            <Col sm="9">
              <Form.Select required onChange={console.log(4)}>
                <option value="cantrip"> Cantrip </option>
                <option value="1st">1st Level </option>
                <option value="2nd">2nd Level</option>
                <option value="3rd">3rd Level</option>
                <option value="4th">4th Level</option>
                <option value="5th">5th Level</option>
                <option value="6th">6th Level</option>
                <option value="7th">7th Level</option>
                <option value="8th">8th Level</option>
                <option value="9th">9th Level</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">School</Form.Label>
            <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='necromancy' /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">properties</Form.Label>
            <Col>
              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Casting Time</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='1 action' /></Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Range/Area</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='60ft' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Component</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='V, S, M (A pinch of bone ash)' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Duration</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='Instantaneous' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Attack/Save</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='DEX' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="2">Damage Type</Form.Label>
                <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder='Necrotic' /></Col>
              </Form.Group>

            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">Description</Form.Label>
            <Col sm="9"><Form.Control required onChange={console.log(4)} type="text" placeholder={default_desc} /></Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="2">Tags</Form.Label>
            <Col style={{display:'grid',flexDirection:'column',gridTemplateColumns: 'auto auto auto'}} sm="9">{displayTags()}</Col>
          </Form.Group>

          <Row className=" mt-4 mb-4 pe-3 d-flex justify-content-end">
            <Col sm="1" >
              <Button disabled={false || false} value="Submit" type="submit" onClick={(e) => alert(e.target.value)}>Valider</Button>
            </Col>
          </Row>

        </Form>
      </Row>
    </Container>
  )

}

export default CreateSpell;