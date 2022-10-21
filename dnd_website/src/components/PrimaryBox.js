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

    // const [choice,setChoice] = useState('Actions')
    const [choice,setChoice] = useState('Spells')

    function handleDisplay(){
        let selected;
        switch (choice) {
            case 'Actions':
                selected = <ActionSubPage/>
                break;
        
            case 'Spells':
                selected = <SpellsSubPage/>
                break;
        
            case 'Inventory':
                selected = <InventorySubPage/>
                break;
        
            case 'Features & Traits':
                selected = <FeaturesTraitsSubPage/>
                break;
        
            case 'Description':
                selected = <DescriptionSubPage/>
                break;
        
            case 'Notes':
                selected = <NotesSubPage/>
                break;
        
            case 'Extras':
                selected = <ExtrasSubPage/>
                break;
        
            default:
                break;
        }
        return selected;
    }

    return(
        <div className='primary-box primary-box-height borders-red-rounded'>
            <Nav className="mt-0" justify variant="pillgs"
            defaultActiveKey="Spells"
            style={{position:'sticky'}}
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
            <div style={{overflow:'auto',height:'calc(73vh + 1px)'}}>
                {handleDisplay()}
            </div>
        </div> 
    )

} 

export default PrimaryBox;