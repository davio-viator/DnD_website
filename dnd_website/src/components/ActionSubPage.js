import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import AttackBlock from './AttackBlock';



const ActionSubPage = (props) => {

    const [choice,setChoice] = useState('All')

    function handleSelected(e,selected){
        console.log(selected);
        setChoice(selected)
    }


    function handleDisplay(){
        switch (choice) {
            case 'All':
                return (
                    <>
                        <AttackBlock/>
                    </>
                )
                break;
            case 'Attacks':
                return ( <><AttackBlock/></>)
                break;
            case 'Action':
                return (<p className='t-center'>Actions</p>)
                break;
            case 'Bonus Action':
                return (<p className='t-center'>Bonus Action</p>)
                break;
            case 'Reaction':
                return (<p className='t-center'>Reaction</p>)
                break;
            case 'Other':
                return (<p className='t-center'>Other</p>)
                break;
            case 'Limited use':
                return (<p className='t-center'>Limited use</p>)
                break;
        
            default:
                break;
        }
    }

    return(
        <div>
            <Nav className="mt-0" justify variant="pills"
            defaultActiveKey="All"
            onSelect={(selectedKey,e)=>handleSelected(e,selectedKey)}
            >                
                <Nav.Link className='ms-2 mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="All" >ALL</Nav.Link>                
                <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold',}} eventKey="Attacks" >ATTACKS</Nav.Link>                
                <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Action" >ACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Bonus Action" >BONUS ACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Reaction" >REACTION</Nav.Link>                
                <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Other" >OTHER</Nav.Link>                
                <Nav.Link className='me-2 mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Limited use" >LIMITED USE</Nav.Link>    
            </Nav>
            {handleDisplay()}
        </div>
    )

}

export default ActionSubPage