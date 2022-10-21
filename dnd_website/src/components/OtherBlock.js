import React from 'react';

import Action from './Action';

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


  function spellsText(){
    return spells.map((item,index)=>{
        return(
            <Action key={index} title={item.title} text={item.text} times={item.times} frequency={item.frequency} />
        )
    })
  }

  function featureTest(){
    return features.map((item,index)=>{
      return(
        <Action key={index} title={item.title} text={item.text} times={item.times} frequency={item.frequency} />
      )
  })
  }

  return(
    <div className='ms-3 me-3 mt-3 mb-4'>
      <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>OTHER</span></div>
        <Action title='Actions in Combat'  text='Interact with an Object' times={0} frequency=''/>
        {spellsText()}
        {featureTest()}
    </div>
  )
  
}

export default OtherBlock;