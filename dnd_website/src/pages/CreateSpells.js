import React, { useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import FormHeader from '../components/FormHeader';
import Button from 'react-bootstrap/esm/Button';

import Axios from 'axios'

const CreateSpell = (props) => {

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
  "TELEPORTATION"
  ]

  // const [spellState,setSpellState] = useState(
  //   {name:'',
  //   level:'',
  //   school:'',
  //   properties:{},
  //   description:'',
  //   tags:[]}
  //   )

  var nameRef = useRef('')
  var levelRef = useRef('00Cantrip')
  var schoolRef = useRef('abjuration')
  var propertiesRef = useRef({})
  var descriptionRef = useRef('')
  var tagRef = useRef([])

  function displayTags(){
    return tags.map((item,index)=>{
      return  <Form.Check
      onChange={(e) => handleTags(e)}
      key={index}
      inline
      label={item}
      name="group1"
      type='checkbox'
      value={item}
      id={`inline-${item}-1`}
    />
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    let values = {name:nameRef.current,
      level:levelRef.current,
      school:schoolRef.current,
      properties:propertiesRef.current,
      description:descriptionRef.current,
      tags:tagRef.current}

    // setSpellState({...spellState,name:nameRef.current,
    //   level:levelRef.current,
    //   school:schoolRef.current,
    //   properties:propertiesRef.current,
    //   description:descriptionRef.current,
    //   tags:tagRef.current})
    console.log(propertiesRef.current)
     createSpell(values)      
  }

  function createSpell(values){
    Axios.post('http://localhost:3030/insert-spell',values)
      .then(res=>{
        console.log(res.data)
      })
  }

  function handleName(e){
    nameRef.current = e.target.value 
    console.log('name: ',nameRef.current)
  }

  function handleLevel(e){
    levelRef.current = e.target.value
    console.log('level: ',levelRef.current)
  }

  function handleSchool(e){
    schoolRef.current = e.target.value
    console.log('school: ',schoolRef.current)
  }

  function handleCasting(e){
    propertiesRef.current.Casting__Time = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleRange(e){
    propertiesRef.current.Range__Area = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleComponent(e){
    propertiesRef.current.Component = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleDuration(e){
    propertiesRef.current.Duration = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleAttack(e){
    propertiesRef.current.Attack__Save = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleDamage(e){
    propertiesRef.current.Damage = e.target.value
    console.log('properties: ',propertiesRef.current)
  }

  function handleDescription(e){
    descriptionRef.current = e.target.value
    console.log('description: ',e.target.value)
  }

  function handleTags(e){
    let tags = tagRef.current
    if(e.target.checked && !tags.includes(e.target.value)){
      tags.push(e.target.value)
      tagRef.current = tags
    }
    if(!e.target.checked){
      tags = tags.filter(function(value, index, arr){ 
        return value != e.target.value;
      });
      tagRef.current = tags
    }
    console.log('tags: ',tagRef.current)
  }



  return(
    <Container className='mt-5 mb-5'>
      <Row>
        <FormHeader title="Spell Creator Form" />
        <Form className="buttongclr registration-form ps-5 ">
          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">Name</Form.Label>
            <Col sm="10"><Form.Control required onChange={(e)=> handleName(e)} type="text" placeholder='Toll the dead' /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">level</Form.Label>
            <Col sm="10">
              <Form.Select required onChange={(e)=>handleLevel(e)}>
                <option value="00Cantrip"> Cantrip </option>
                <option value="1st level">1st Level </option>
                <option value="2nd level">2nd Level</option>
                <option value="3rd level">3rd Level</option>
                <option value="4th level">4th Level</option>
                <option value="5th level">5th Level</option>
                <option value="6th level">6th Level</option>
                <option value="7th level">7th Level</option>
                <option value="8th level">8th Level</option>
                <option value="9th level">9th Level</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">School</Form.Label>
            <Col sm="10">
              <Form.Select required onChange={(e)=>handleSchool(e)}>
                <option value="abjuration"> Abjuration </option>
                <option value="conjuration">Conjuration </option>
                <option value="divination">Divination</option>
                <option value="dunamancy">Dunamancy</option>
                <option value="enchantment">Enchantment</option>
                <option value="evocation">Evocation</option>
                <option value="illusion">Illusion</option>
                <option value="necromancy">Necromancy</option>
                <option value="transmutation">Transmutation</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">properties :</Form.Label>
            <Col>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Casting Time</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleCasting(e)} type="text" placeholder='1 Action' /></Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Range/Area</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleRange(e)} type="text" placeholder='60ft' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Component</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleComponent(e)} type="text" placeholder='V, S, M (A pinch of bone ash)' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Duration</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleDuration(e)} type="text" placeholder='Instantaneous' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Attack/Save</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleAttack(e)} type="text" placeholder='DEX' /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3 mb-3">
                <Form.Label column sm="1">Damage Type</Form.Label>
                <Col sm="10"><Form.Control required onChange={(e)=>handleDamage(e)} type="text" placeholder='Necrotic' /></Col>
              </Form.Group>

            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">Description</Form.Label>
            <Col sm="10"><Form.Control required onChange={(e)=>handleDescription(e)} type="text" placeholder={default_desc} /></Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mt-3 mb-3">
            <Form.Label column sm="1">Tags</Form.Label>
            <Col style={{display:'grid',flexDirection:'column',gridTemplateColumns: 'auto auto auto',margin:'auto'}} sm="9">{displayTags()}</Col>
          </Form.Group>

          <Row className=" mt-4 mb-4 pe-3 d-flex justify-content-end">
            <Col sm="1" >
              <Button disabled={false || false} value="Submit" type="submit" onClick={(e) => handleSubmit(e)}>Valider</Button>
            </Col>
          </Row>

        </Form>
      </Row>
    </Container>
  )

}

export default CreateSpell;