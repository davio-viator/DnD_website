import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import ActionBlock from './ActionBlock';
import AttackBlock from './AttackBlock';
import BonusActionBlocks from './BonusActionBlock';
import OtherBlock from './OtherBlock';
import ReactionBlock from './ReactionBlock';



const ActionSubPage = (props) => {

    const [choice,setChoice] = useState('All')

    function handleSelected(e,selected){
        console.log(selected);
        setChoice(selected)
    }


    function handleDisplay(){
        let selected;
        switch (choice) {
            case 'All':
                selected = (
                    <>
                        <AttackBlock sub={true}/>
                        <ActionBlock sub={true}/>
                        <BonusActionBlocks/>
                        <ReactionBlock/>
                        <OtherBlock/>
                    </>
                )
                break;
            case 'Attacks':
                selected = ( <><AttackBlock sub={false}/></>)
                break;
            case 'Action':
                selected = (<><ActionBlock sub={false}/></>)
                break;
            case 'Bonus Action':
                selected = (<><BonusActionBlocks/></>)
                break;
            case 'Reaction':
                selected = (<><ReactionBlock/></>)
                break;
            case 'Other':
                selected = (<><OtherBlock/></>)
                break;
            case 'Limited use':
                selected = (<p className='t-center'>Limited use</p>)
                break;
        
            default:
                break;
        }
        return selected
    }

    return(
        <div>
            <Nav className="mt-0 mb-3" justify variant="pills"
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
            <div style={{overflow:'auto',height:'calc(67vh + 5px)'}}>
                {handleDisplay()}
            </div>
        </div>
    )

}

export default ActionSubPage