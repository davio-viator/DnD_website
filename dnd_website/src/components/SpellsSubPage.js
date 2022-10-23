import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import SearchBar from '../components/SearchBar';
import Attack from '../components/Attack';
import Spell from '../components/Spell';

const SpellsSubPage = (props) => {

    const [spells,setSpells] = useState({})
    const [spellsSave,setSpellsSave] = useState(spells)
    const [selected,setSelected] = useState('All')

    const spellLevels = ['CANTRIP','1ST','2ND','3RD','4TH','5TH','7TH','7TH','8TH','9TH']

    function handleSelected(e,selected){
        console.log(selected);
        setSelected(selected)
    }

    const header = (
        <Row style={{fontWeight:'bold',fontSize:'12px',}}>
            <Col sm="1"></Col>
            <Col sm="3">NAME</Col>
            <Col className='ps-2' sm="1">TIME</Col>
            <Col className='ps-2' sm="1">RANGE</Col>
            <Col className='ps-2' sm="1">HIT/DC</Col>
            <Col className='ps-1' sm="2">EFFECT</Col>
            <Col className='ps-0' sm="3">NOTES</Col>
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

    function makeSpells(level,conc = false){
        if(spells.length>0){
            level = level.toUpperCase();
            let tempArray = [];
            spells.forEach(element=>{
                if(element.title == level){
                    tempArray.push(element.spells)
                }
            })
            tempArray = tempArray[0]
            if(conc){
                let x = {}
                for (const item in tempArray) {
                    if (tempArray[item].concentration) {
                        const element = tempArray[item];
                        x[item] = element
                    }
                }
                tempArray = x
            }
            const length = Object.keys(tempArray).length
            return Object.values(tempArray).map((item,index) => {
                return (
                    <Spell key={index} text={item.text} name={item.name} item_type={item.item_type} time={item.time} range={item.range} range_type={item.range_type} hit_dice={item.hit_dice} effect={item.effect} notes={item.notes} last={index+1===length} />
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
                    {slots>0?<div className='d-flex mt-1 ms-4'>{makeInputs(slots)}<span className='ms-1 me-2' style={{fontWeight:'bold'}}>SLOTS</span></div>:null}
                </div>
                <hr className='mt-0'/>
                <div className='mt-3'>{header}</div>
            </>
        )
    }

    function displayConcentrationSpell(){        
        let concentrationSpell = new Set()
        if(spells.length>0){
            spells.forEach(element=>{
                if(typeof element.title === 'string'){
                    let spellList = Object.values(element.spells)
                    spellList.forEach(item => {
                        if(item.concentration)concentrationSpell.add(element.title)
                        
                    })
                }
            })
        }
        return Array.from(concentrationSpell).map((item,index) => {
        let slots = getSpellSlots(item)
            return(
                <div key={index}>
                    {makeSpellHeader(item+' LEVEL',slots)}
                    {makeSpells(item,true)}
                </div>
            )
        })
    }

    function displaySpells(){
        let returnValue;
        let slots = getSpellSlots(selected)
        switch (selected) {
            case 'All':
                returnValue = spellLevels.map((item,index) => {
                    var slotsAll = getSpellSlots(spellLevels[index])
                    if(slotsAll!=-1){
                        return(
                            <div key={index}>
                            {item!=='CANTRIP'?makeSpellHeader(spellLevels[index]+' LEVEL',slotsAll):makeSpellHeader(spellLevels[index],slotsAll)}
                            {makeSpells(spellLevels[index])}
                            </div>
                        )
                    }
                    
                })
                break;
            case 'CANTRIP':
                returnValue = (
                    <>
                    {makeSpellHeader('CANTRIP')}
                    {makeSpells('Cantrip')}
                    </>
                )
                break;
            case 'Concentration':
                returnValue = (
                    <>
                    {displayConcentrationSpell()}
                    </>
                )
                break;
        
            default:
                returnValue = (
                    <>
                    {makeSpellHeader(selected+' LEVEL',slots)}
                    {makeSpells(selected)}
                    </>
                )
                break;
        }
        return returnValue;
    }

    function initSpell(){
        let spellsArray = [
            {
                title:'CANTRIP',
                slots:0,
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

                }
            },
            {
                title:'1ST',
                slots:4,
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
                        notes:'D: 1m, V/S/M',
                        concentration:true
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
                        effect:'1d8+6 🖤',
                        notes:'V/S'
                    },            
                }
            },
            {
                title:'2ND',
                slots:3,
                spells:{
                    1:{
                        text:'cast',
                        name:'Lesser Restoration',
                        item_type:'Cleric',
                        time:'1A',
                        range:'Touch',
                        range_type:'',
                        hit_dice:'--',
                        effect:'Blinded*',
                        notes:'V/S'
                    },
                    2:{
                        text:'cast',
                        name:'Spiritual Weapon',
                        item_type:'Cleric',
                        time:'1BA',
                        range:'60ft',
                        range_type:'',
                        hit_dice:'+6',
                        effect:'1d8+3',
                        notes:'D: 1m, V/S'
                    },
                }
            },
            {
                title:'3RD',
                slots:2,
                spells:{
                    1:{
                        text:'at will',
                        name:'Spirit Guardians',
                        item_type:'Cleric',
                        time:'1A',
                        range:'self',
                        range_type:'',
                        hit_dice:'WIS 14',
                        effect:'3d8',
                        notes:'&D: 10m, 15ft., V/S/M',
                        concentration:true
                    },
                }
            },
        ]
        // ctrl+shift+u 1 = 
        setSpells(spellsArray)
    }

    function getSpellSlots(level){
        let slots = -1
        if(spells.length>0){
            spells.forEach(element => {
                if(element.title===level){
                    slots = element.slots
                }
            })
        }
        return slots
    }

    function makeMenu(){
        let spellsLevel = new Set()
        if(spells.length>0){
            spells.forEach(element=>{
                if(typeof element.title === 'string'){
                    spellsLevel.add(element)
                }
            })
        }
        return Array.from(spellsLevel).map((item,index) => {
            return(
                <Nav.Link key={index} className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey={item.title}>{displayName(item.title)}</Nav.Link>
                
            )
        })
    }

    function MakeConcentrationMenuIcon(){
        let hasConcentration = false;
        if(spells.length>0){
            spells.forEach(element=>{
                if(typeof element.title === 'string'){
                    let x = Object.values(element.spells)
                    x.forEach(item => {
                        if(item.concentration)hasConcentration = true
                    })
                }
            })
        }
        return hasConcentration?
        <Nav.Link className='mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey='Concentration'>{displayName('Concentration')}</Nav.Link>
        :null
    }

    function displayName(name){
        let newName = '';
        switch (name) {
            case 'CANTRIP':
                newName = '- 0 -'
                break;
        
            case 'Concentration':
                newName = 'C'
                break;
        
            default:
                newName = name
                break;
        }
        return newName
    }

    function test(){
        var object = {"0":5,"1":7,"2":4,"3":6,"4":7,"5":8,"6":12,"7":11,"8":2}  
        var covert  = Object.keys(object).map(function(key)  
        {  
        return [Number(key), object[key]];  
        });  
        
        console.log(covert);  
    }

    function handleSearch(value){
        console.log(value)
    }

    useEffect(()=>{
        initSpell()
        // test()
    },[])

    return(
        <div className='ms-3'>
            {makeHeader()}
            <div>
                <SearchBar onChange={(value,e) => handleSearch(value)} icon placeholder="Search Spell Names,Casting Times, Damage Types,Conditions or Tags" submenue={false}/>
                <div className='mt-3 mb-3' style={{width:'40%'}}>
                    <Nav className="mt-0 mb-3" justify variant="pills"
                    defaultActiveKey="All"
                    onSelect={(selectedKey,e)=>handleSelected(e,selectedKey)}
                    >                
                        <Nav.Link className='ms-2 mt-1 mb-0 ps-0 pe-0' style={{fontSize:'10px',fontWeight:'bold'}} eventKey="All" >ALL</Nav.Link>                
                        {makeMenu()}               
                        {MakeConcentrationMenuIcon()}
                    </Nav>
                </div>
            </div>
            <div style={{overflow:'auto',overflowX:'hidden',height:'calc(56vh + 12px)'}}>
                {displaySpells()}                
            </div>
        </div>
    )

}

export default SpellsSubPage