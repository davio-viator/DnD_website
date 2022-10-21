import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Attack from './Attack';

const AttackBlock = (props) => {

  const actions = [
    {
      icon:'X',
      item_name:'Mace',
      item_type:'Melee Weapon',
      range:'5 ft',
      range_type:'Reach',
      hit_dice:'+4',
      damage:'1d6+4',
      notes:'Simple'
    },
    {
      icon:'O',
      item_name:'Inflict Wounds',
      item_type:'1st level · Cleric',
      range:'Touch',
      range_type:'',
      hit_dice:'+6',
      damage:'3d10',
      notes:'V/S'
    },
    {
      icon:'K',
      item_name:'Unarmed Strike',
      item_type:'Melee Attack',
      range:'5 ft',
      range_type:'Reach',
      hit_dice:'+4',
      damage:'2',
      notes:''
    },
    {
      icon:'X',
      item_name:'Breath Weapon (Blue)',
      item_type:'',
      range:'30 ft',
      range_type:'',
      hit_dice:'12 DEX',
      damage:'2d6',
      notes:'1/SR'
    }
  ]

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

function createAttacks(){
  return actions.map((item,index)=>{
    return(
      <Attack key={index} icon={item.icon} 
      item_name={item.item_name} item_type={item.item_type} 
      range={item.range} range_type={item.range_type} 
      hit_dice={item.hit_dice} damage={item.damage}
      notes={item.notes} />
    )
  })
}

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
  
  return(
    <div className='ms-3 me-3 mt-3 mb-4'>
      <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>ACTIONS ·</span> Attacks per Actions: {1}</div>
      <Row style={{fontWeight:'bold',fontSize:'12px',}}>
        <Col sm="1"></Col>
        <Col sm="3">ATTACK</Col>
        <Col sm="1">RANGE</Col>
        <Col sm="2">HIT/DC</Col>
        <Col sm="2">DAMAGE</Col>
        <Col sm="3">NOTES</Col>
      </Row>
      {createAttacks()}
      {!props.sub?<div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>BONUS ACTIONS</span></div>:null}
      {!props.sub?createBonusAction():null}
    </div>
  )

}

export default AttackBlock;