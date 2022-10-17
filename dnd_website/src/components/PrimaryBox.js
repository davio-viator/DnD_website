import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

import ActionSubPage from './ActionSubPage';
import SpellsSubPage from './SpellsSubPage';
import InventorySubPage from './InventorySubPage';
import FeaturesTraitsSubPage from './FeaturesTraitsSubPage';
import DescriptionSubPage from './DescriptionSubPage';
import NotesSubPage from './NotesSubPage';
import ExtrasSubPage from './ExtrasSubPage';

const PrimaryBox = (props) => {
    
    function handleSelected(e,selected){
        console.log(selected);
        setChoice(selected);
    }

    const [choice,setChoice] = useState('Actions')

    function handleDisplay(){
        switch (choice) {
            case 'Actions':
                return <ActionSubPage/>
                break;
        
            case 'Spells':
                return <SpellsSubPage/>
                break;
        
            case 'Inventory':
                return <InventorySubPage/>
                break;
        
            case 'Features & Traits':
                return <FeaturesTraitsSubPage/>
                break;
        
            case 'Description':
                return <DescriptionSubPage/>
                break;
        
            case 'Notes':
                return <NotesSubPage/>
                break;
        
            case 'Extras':
                return <ExtrasSubPage/>
                break;
        
            default:
                break;
        }
    }

    return(
        <div className='primary-box borders-red-rounded'>
            <Nav className="mt-0" justify variant="pillgs"
            defaultActiveKey="Actions"
            onSelect={(selectedKey,e)=>handleSelected(e,selectedKey)}
            >                
                <Nav.Link className='ms-2 mb-0 teete' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Actions" >ACTIONS</Nav.Link>                
                <Nav.Link className='mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Spells" >SPELLS</Nav.Link>                
                <Nav.Link className='mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Inventory" >INVENTORY</Nav.Link>                
                <Nav.Link className='mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Features & Traits" >FEATURES & TRAITS</Nav.Link>                
                <Nav.Link className='mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Description" >DESCRIPTION</Nav.Link>                
                <Nav.Link className='mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Notes" >NOTES</Nav.Link>                
                <Nav.Link className='me-1 mb-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Extras" >EXTRAS</Nav.Link>    
            </Nav>
            {handleDisplay()}
        </div> 
    )

} 

export default PrimaryBox;