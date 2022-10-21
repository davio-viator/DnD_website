import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Attack from './Attack';
import Action from './Action';

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
            <Attack key={index} icon={item.icon} 
            item_name={item.item_name} item_type={item.item_type} 
            range={item.range} range_type={item.range_type} 
            hit_dice={item.hit_dice} damage={item.damage}
            notes={item.notes} />
          )
        })
      }

      function createSpecialBonusActionText(name,text){
        return specialBonusAction.map((item,index)=>{
            return(
                <Action key={index} title={item.title} text={item.text} times={item.times} frequency={item.frequency} />
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