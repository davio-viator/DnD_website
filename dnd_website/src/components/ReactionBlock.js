import React from 'react';

const ReactionBlock = (props) => {

  return(
    <div className='ms-3 me-3 mt-3 mb-4'>
        <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>REACTIONS</span></div>
       <h6 className='mt-3 ms-3 mt-3 mb-4'>Actions in Combat</h6>
        <div className='border-left-thick fs-7 ms-4 ps-2'>
            Opportunity Attack
        </div>
    </div>
  )

}

export default ReactionBlock;