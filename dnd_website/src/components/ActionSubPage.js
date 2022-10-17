import React from 'react';

import Nav from 'react-bootstrap/Nav';

const ActionSubPage = (props) => {

    function handleSelected(e,selected){
        console.log(selected);
    }

    return(
        <div>
            <Nav className="mt-0" justify variant="pills"
            defaultActiveKey="All"
            onSelect={(selectedKey,e)=>handleSelected(e,selectedKey)}
            >                
                <Nav.Link className='ms-2 mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="All" >ALL</Nav.Link>                
                <Nav.Link className='mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Attacks" >ATTACKS</Nav.Link>                
                <Nav.Link className='mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Action" >ACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Bonus Action" >BONUS ACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Reaction" >REACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Other" >OTHER</Nav.Link>                
                <Nav.Link className='me-2 mt-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Limited use" >LIMITED USE</Nav.Link>    
            </Nav>
        </div>
    )

}

export default ActionSubPage