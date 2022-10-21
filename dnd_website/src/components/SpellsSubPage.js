import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import SearchBar from '../components/SearchBar';
import Attack from '../components/Attack';
import Spell from '../components/Spell';

const SpellsSubPage = (props) => {

    const [spells,setSpells] = useState({})
    const [selected,setSelected] = useState('All')

    function handleSelected(e,selected){
        console.log(selected);
        setSelected(selected)
    }

    const header = (
        <Row style={{fontWeight:'bold',fontSize:'12px',}}>
            <Col sm="1"></Col>
            <Col sm="4">NAME</Col>
            <Col sm="1">TIME</Col>
            <Col sm="1">RANGE</Col>
            <Col sm="1">HIT/DC</Col>
            <Col sm="2">EFFECT</Col>
            <Col sm="2">NOTES</Col>
        </Row>
    )

    function makeHeader(){
        return(
            <div className='d-flex justify-content-center t-center'>
                <div className='me-2'>
                    <div>
                        <span>+</span>
                        <span style={{fontWeight:'bold'}}>3</span>
                    </div>
                    <div style={{fontSize:'12px',color:'gray',fontWeight:'bold'}}>MODIFIER</div>
                </div>

                <div className='me-2 ms-2'>
                    <span>+</span>
                    <span style={{fontWeight:'bold'}}>6</span>
                    <div style={{fontSize:'12px',color:'gray',fontWeight:'bold'}}>SPELL ATTACK</div>
                </div>

                <div className='ms-2'>
                    <div>
                        <span style={{fontWeight:'bold'}}>14</span>
                    </div>
                    <div style={{fontSize:'12px',color:'gray',fontWeight:'bold'}}>SAVE DC</div>
                </div>
            </div>
        )
    }

    function makeSpells(level){
        if(spells.length>0){
            level = level.toUpperCase();
            let tempArray = [];
            spells.forEach(element=>{
                if(element.title == level){
                    tempArray.push(element.spells)
                }
            })
            tempArray = tempArray[0]
            return Object.values(tempArray).map((item,index) => {
                return (
                    <Spell key={index} text={item.text} name={item.name} item_type={item.item_type} time={item.time} range={item.range} range_type={item.range_type} hit_dice={item.hit_dice} effect={item.effect} notes={item.notes} />
                    
                )
            })
        }
    }

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

    function makeSpellHeader(name,slots=0){
        return(
            <>
                <div className='d-flex justify-content-between'>
                    <span className='mt-1' style={{color:'red',fontSize:'15px',fontWeight:'bold'}}>{name}</span>
                    {slots>0?<div className='d-flex mt-1 ms-4'>{makeInputs(slots)}<span className='ms-1' style={{fontWeight:'bold'}}>SLOTS</span></div>:null}
                </div>
                <hr className='mt-0'/>
                <div className='mt-3'>{header}</div>
            </>
        )
    }

    function displaySpells(){
        let returnValue;
        switch (selected) {
            case 'All':
                returnValue = (
                    <>
                    {makeSpellHeader('CANTRIP')}
                    {makeSpells('Cantrip')}
                    {makeSpellHeader('1ST LEVEL',3)}
                    {makeSpells('1ST')}
                    </>
                )
                break;
            case 'Cantrip':
                returnValue = (
                    <>
                    {makeSpellHeader('CANTRIP',3)}
                    {makeSpells('Cantrip')}
                    </>
                )
                break;
            case '1ST':
                returnValue = (
                    <>
                    {makeSpellHeader('1ST LEVEL')}
                    {makeSpells('1ST')}
                    </>
                )
                
                break;
            case '2ND':
                
                break;
            case '3RD':
                
                break;
            case 'Concentration':
                
                break;
        
            default:
                break;
        }
        return returnValue;
    }

    function initCantrip(){
        let cantripArray = {title:'CANTRIP',
        spells:{
            1:{
                text:'at will',
                name:'Light',
                item_type:'Cleric',
                time:'1A',
                range:'Touch',
                range_type:'',
                hit_dice:'DEX 14',
                effect:'Creation*',
                notes:'D: 1h, 20 tf sphere, V/M'
            },
            2:{
                text:'at will',
                name:'Mending',
                item_type:'Cleric',
                time:'1m',
                range:'Touch',
                range_type:'',
                hit_dice:'--',
                damage:'Utility',
                notes:'V/S/M'
            },
            3:{
                text:'it well',
                name:'Sacred Flame',
                item_type:'Cleric',
                time:'1A',
                range:'60 ft',
                range_type:'',
                hit_dice:'--',
                damage:'2d8',
                notes:'V/S'
            },
            4:{
                text:'at will',
                name:'Spare the Dying',
                item_type:'Cleric',
                time:'1A',
                range:'Touch',
                range_type:'',
                hit_dice:'--',
                damage:'Healing',
                notes:'V/S'
            },

        }}

        setSpells(oldSpells => [oldSpells,cantripArray])
    }

    function initSpell(){
        let spellsArray = [{title:'1ST',
        spells:{
            1:{
                text:'cast',
                name:'Bless',
                item_type:'Cleric',
                time:'1A',
                range:'30ft',
                range_type:'',
                hit_dice:'--',
                effect:'Buff',
                notes:'D: 1m, V/S/M'
            },
            2:{
                text:'cast',
                name:'Command',
                item_type:'Cleric',
                time:'1A',
                range:'60ft',
                range_type:'',
                hit_dice:'WIS 14',
                effect:'Prone',
                notes:'D: 1Rnd, V'
            },
            3:{
                text:'cast',
                name:'Cure Wounds',
                item_type:'Cleric',
                time:'1A',
                range:'Touch',
                range_type:'',
                hit_dice:'--',
                effect:'1d8+6 🖤',
                notes:'V/S'
            },            
        }}]
        // ctrl+shift+u 1 = 
        setSpells(oldSpells => [...oldSpells,...spellsArray])
    }

    useEffect(()=>{
        initCantrip()
        initSpell()
    },[])

    return(
        <div className='ms-3'>
            {makeHeader()}
            <div>
                <SearchBar icon placeholder="Search Spell Names,Casting Times, Damage Types,Conditions or Tags" submenue={false}/>
                <div className='mt-3 mb-3' style={{width:'40%'}}>
                    <Nav className="mt-0 mb-3" justify variant="pills"
                    defaultActiveKey="All"
                    onSelect={(selectedKey,e)=>handleSelected(e,selectedKey)}
                    >                
                        <Nav.Link className='ms-2 mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="All" >ALL</Nav.Link>                
                        <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold',}} eventKey="Cantrip" >- 0 -</Nav.Link>                
                        <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="1ST" >1ST</Nav.Link>                
                        <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="2ND Action" >2ND</Nav.Link>                
                        <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="3RD" >3RD</Nav.Link>                
                        <Nav.Link title="Concentration" className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="Concentration" >C</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div style={{overflow:'auto',overflowX:'hidden',height:'calc(56vh + 16px)'}}>
                {displaySpells()}
            </div>
        </div>
    )

}

export default SpellsSubPage