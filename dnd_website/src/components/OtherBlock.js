import React from 'react';

const OtherBlock = (props) => {

  const spells = [
    {
      title:'Spells',
      text:'Mending (Cantrip), Prayer of Healing (2nd)',
      times:'',
      frequency:''
    },
  ]

  const features = [
    {
      title:'Channel Divinity (Special)',
      text:'You can channel divine energy to fuel magical effects a number of times per short rest',
      times:1,
      frequency:'Short Rest'
    },
    {
      title:'Destroy Undead',
      text:'At 5th level, when an undead fails its saving throw against your Turn Undead feature, it is instantly destroyed if it is of CR ½ or lower.\nAt 8th level and higher, it is instead destroyed if it is of CR 1 or lower.',
      times:'',
      frequency:''
    }
  ]

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

  function spellsText(){
    return spells.map((item,index)=>{
        return(
            <div key={index+item.title+index+item.text+index+item.times+index+item.frequency}>
              <h6 key={index+item.title} className='mt-3 ms-3'>{item.title}</h6>
              <div key={index+item.text} className='border-left-thick fs-7 ms-4 ps-2'>
                {item.text.split('\n').map((item,index)=>{
                    return <p key={index}>{item}</p>
                })}
              </div>
              {item.times>0?
                <div key={index+item.times} className='d-flex mt-1 ms-4'>
                  {makeInputs(item.times)}
                  <span key={index+item.frequency}> / {item.frequency}</span>
                </div>
              :null}
              
          </div>
        )
    })
  }

  function featureTest(){
    return features.map((item,index)=>{
      return(
          <div key={index+item.title+index+item.text+index+item.times+index+item.frequency}>
            <h6 key={index+item.title} className='mt-3 ms-3'>{item.title}</h6>
            <div key={index+item.text} className='border-left-thick fs-7 ms-4 ps-2'>
              {item.text.split('\n').map((item,index)=>{
                  return <p key={index}>{item}</p>
              })}
            </div>
            {item.times>0?
              <div key={index+item.times} className='d-flex mt-1 ms-4'>
                {makeInputs(item.times)}
                <span key={index+item.frequency}> / {item.frequency}</span>
              </div>
            :null}
            
        </div>
      )
  })
  }

  return(
    <div className='ms-3 me-3 mt-3 mb-4'>
      <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>OTHER</span></div>
      <h6 className='mt-3 ms-3'>Actions in Combat</h6>
        <div className='border-left-thick fs-7 ms-4 ps-2'>
            Interact with an Object
        </div>
        {spellsText()}
        {featureTest()}
    </div>
  )
  
}

export default OtherBlock;