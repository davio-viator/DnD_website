import React from 'react'

import Form from 'react-bootstrap/Form';

const OptionSelector = (props) => {

  function createOptions(){
    return props.backgrounds.map((item,index)=>{
      return <option key={index} value={item}>{item}</option>
    })
  }

  return(
    <div style={{width:'r1f00%'}}>
      <Form.Select defaultValue={'default'}>
      <option value={'default'}>Choose a background</option>
        {createOptions()}
      </Form.Select>
    </div>
  )

}

export default OptionSelector;