import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BonusActionBlocks = (props) => {

    const bonusActions = [
        {icon:'O',
        item_name:'Spiritual Weapons',
        item_type:'2nd Level · Cleric',
        range:'60 ft',
        range_type:'',
        hit_dice:'+6',
        damage:'1d8+3',
        notes:'D: 1m, V/S'}
      ]

      const actions = [
        {
            title:'Breath Weapon (Blue)',
            text:'As an action once per short rest, exhale in a 5 by 30 ft. line (DEX DC 13, half damage on success) for 2d6 Lightning Damage [6th] 3d6, [11th] 4d6, [16th] 5d6',
            times:1,
            frequency:'Short Rest'
        },
        {
            title:'Channel Divinity: Preserve Life',
            text:'As an action, you can restore <strong>25</strong> HP. Choose any creatures within 30 ft. of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct.',
            times:0,
            frequency:''
        },
        {
            title:'Channel Divinity: Turn Undead',
            text:'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a WIS saving throw (DC <strong>14</strong>). If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.',
            times:0,
            frequency:''
        },
        {
            title:'Unarmed Strike',
            text:'ou can punch, kick, head-butt, or use a similar forceful blow and deal bludgeoning damage equal to 1 + STR modifier',
            times:0,
            frequency:''
        }
    ]

    const specialBonusAction = [
        {
            title:'Spells',
            text:'Spiritual Weapon (2nd)',
            times:'',
            frequency:''
        },
        {
            title:'Rage',
            text:"As a bonus action enter a rage for up to 1 minute (10 rounds)\nYou gain advantage on STR checks and saving throws (not attacks), +2 melee damage with STR weapons, resistance to bludgeoning, piercing, slashing damage. You can't cast or concentrate on spells while raging.\nYour rage ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage as a bonus action.",
            times:2,
            frequency:'Long Rest'
        },
    ]

      function createBonusAction(){
        return bonusActions.map((item,index)=>{
          return(
           <Row key={index} className='mt-3'>
              <Col key={index+item.icon} sm="1">{item.icon}</Col>
              <Col key={index+item.item_name} className='fs-7' sm="3">{item.item_name}
                {item.item_type!==''?<Row key={index+item.item_type} style={{fontSize:'11px',color:'gray'}} className="ms-0">{item.item_type}</Row>:null}
              </Col>
              <Col key={index+item.range} className='fs-7' sm="1">{item.range}
                {item.range_type?<Row key={index+item.range_type} style={{fontSize:'11px',color:'gray'}} className="ms-0">{item.range_type}</Row>:null}
              </Col>
              <Col key={index+item.hit_dice} className='fs-7' sm="2">{item.hit_dice}</Col>
              <Col key={index+item.damage} className='fs-7' sm="2">{item.damage} </Col>
              <Col key={index+item.notes} className='fs-7' sm="3">{item.notes}</Col>
            </Row>
          )
        })
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

      function createSpecialBonusActionText(name,text){
        return specialBonusAction.map((item,index)=>{
            return(
                <div key={index+item.title+index+item.text+index+item.times+index+item.frequency}>
                    <h6 key={index+item.title} className='mt-3 ms-3'>{item.title}</h6>
                    <div key={index+item.text} className='border-left-thick fs-7 ms-4 ps-2'>
                        {item.text.split('\n').map((item,index)=>{
                           return <p key={index}>{item}</p>
                        })}
                    </div>
                    {item.times>0?
                        <div key={index+item.times} className='d-flex mt-1 ms-4'>
                            {makeInputs(item.times)}
                            <span key={index+item.frequency}> / {item.frequency}</span>
                        </div>
                    :null}
                    
                </div>
            )
        })
      }

    return (
        <div className='ms-3 me-3 mt-3 mb-4'>
            <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>BONUS ACTIONS</span></div>
            <Row style={{fontWeight:'bold',fontSize:'12px',}}>
                <Col sm="1"></Col>
                <Col sm="3">ATTACK</Col>
                <Col sm="1">RANGE</Col>
                <Col sm="2">HIT/DC</Col>
                <Col sm="2">DAMAGE</Col>
                <Col sm="3">NOTES</Col>
            </Row>
            {createBonusAction()}
            <h6 className='mt-3 ms-3'>Actions in Combat</h6>
            <div className='border-left-thick fs-7 ms-4 ps-2'>
                Two-Weapon Fighting
            </div>
            {createSpecialBonusActionText()}
        </div>
    )

}

export default BonusActionBlocks;