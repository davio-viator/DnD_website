import React,{UseState} from 'react'

const FormHeader = (props) => {

  return(
    <div className='form-header'>
      <strong>{props.title.toUpperCase()}</strong>
    </div>
  )
}

export default FormHeader;