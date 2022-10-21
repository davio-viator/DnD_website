import React from 'react';

import Action from './Action';

const ReactionBlock = (props) => {
// <Action title={item.title} text={item.text} times={item.times} frequency={item.frequency} />
  return(
    <div className='ms-3 me-3 mt-3 mb-4'>
        <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>REACTIONS</span></div>
        <Action title='Actions in Combat'  text='Opportunity Attack' times={0} frequency=''/>
    </div>
  )

}

export default ReactionBlock;