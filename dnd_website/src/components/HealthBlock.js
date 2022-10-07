import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

const HealthBlock = (props) => {

  const [current,setCurrent] = useState(props.current)
  const [max,setMax] = useState(props.max)
  const [temp,setTemp] = useState(props.temp > 0?props.temp:'')

  function handleHpChange(e){
    console.log(e.target.value);
    setCurrent(e.target.value)
  }

  function handleTempChange(e){
    console.log(e.target.value);
    if(e.target.value == 0) {
      setTemp('')
    }
    else{
      setTemp(e.target.value)
    }
  }

  function handleHeal(e){
    let value = parseInt(document.getElementById('input-value').value)
    let newHP = current+value;
    newHP>max?setCurrent(max):setCurrent(newHP)
    document.getElementById('input-value').value = null
  }

  function handleDamage(e){
    let value = Math.abs(parseInt(document.getElementById('input-value').value))
    let newHP
    if(temp <= 0){
      newHP = current-value;
      newHP<0?setCurrent(0):setCurrent(newHP)
    }else{
      let newTemp = temp-value;
      newTemp>0?setTemp(newTemp):setTemp('')
      if(newTemp>0){
        setTemp(newTemp)
      }else{
        setTemp('')
        newHP = current-Math.abs(newTemp)
        setCurrent(newHP)
      }
      console.log(newTemp);
    }
    document.getElementById('input-value').value = null
  }

  return(
    <div className="border-red-health" style={{background:'white'}}>
      <div className="d-flex">
        <div className="health-block-left ps-3 me-2">
          <Button className="t-center-i heal stat-button-size" onClick={(e)=>handleHeal(e)} variant="outline-success" size="sm" >HEAL</Button>
          <Form.Control id="input-value" className="t-center stat-input-size"></Form.Control>
          <Button className="stat-button-size" onClick={(e)=>handleDamage(e)} variant="outline-danger" size="sm">DAMAGE</Button>
        </div>
        <div className="d-flex ">
          <div>
            <span>CURRENT</span>
            <input className="input-heath-block t-center" onChange={(e) => handleHpChange(e)} value={current} type='number'/>
          </div>
          <span className="ms-2 me-2" >/</span>
          <div>
            <span>MAX</span>
            <input className="input-heath-block t-center" value={max} readOnly type='number'/>
          </div>
          <span className="ms-1 me-1"></span>
          <div className="ms-">
            <span>TEMP</span>
            <input className="input-heath-block t-center" type='number' min={0} onChange={(e) => handleTempChange(e)} value={temp} placeholder="--"/>
          </div>
        </div>
      </div>
      <div className="t-center hp-label">HIT POINTS</div>
    </div>
  )
}

export default HealthBlock