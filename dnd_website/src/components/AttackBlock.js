import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  
  return(
    <div className='ms-3 me-3'>
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
      <div className='mt-1 mb-1' style={{fontSize:'12px',}}><span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}>BONUS ACTIONS</span></div>
      {createBonusAction()}
    </div>
  )

}

export default AttackBlock;