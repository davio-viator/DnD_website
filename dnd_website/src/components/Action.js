import React from 'react';

const Action = (props) => {

  function handleClick(e){
    let input = e.target;
    let className = input.classList[0]
    if(className.includes('used')){
        input.classList.remove(className)
        input.classList.add(className.replace('-used',''))
    }
    else{
        input.classList.remove(className)
        input.classList.add(className+'-used')
    }
  }

  function makeInputs(number){
    let sizeArray = []
    for (let i = 0; i < number; i++) {
        sizeArray.push(i)
    }
    return (sizeArray.map((item,index)=>{
        return(
            <div onClick={(e) => handleClick(e)} key={index+item} role="checkbox" aria-checked="false" aria-label="use" className="small-checkbox"></div>
        )
    }))
  }

  return(
    <div >
      <h6 className='mt-3 ms-3'>{props.title}</h6>
      <div className='border-left-thick fs-7 ms-4 ps-2'>
        {props.text.split('\n').map((item,index)=>{
            return <p key={index}>{item}</p>
        })}
      </div>
      {props.times>0?
        <div className='d-flex mt-1 ms-4'>
          {makeInputs(props.times)}
          <span > / {props.frequency}</span>
        </div>
      :null}
      
  </div>
  )
  


}

export default Action