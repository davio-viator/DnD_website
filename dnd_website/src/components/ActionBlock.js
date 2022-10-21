import React from 'react';
import AttackBlock from './AttackBlock';

const ActionBlock = (props) => {


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

    function makeActions(){
        return actions.map((item,index)=>{
            return(
                <div key={index+item.title+index+item.text+index+item.times+index+item.frequency}>
                    <h6 key={index+item.title} className='mt-3 ms-3'>{item.title}</h6>
                    <div key={index+item.text} className='border-left-thick fs-7 ms-4 ps-2'>
                        {item.text}
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
        <div className=''>
            {!props.sub?<AttackBlock sub={true}/>:null}
            <h6 className='mt-3 ms-3 mt-3 mb-4'>Actions in Combat</h6>
            <div className='border-left-thick fs-7 ms-4 ps-2'>
                Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help, Hide, Improvise, Ready, Search, Shove, Use an Object
            </div>
            {makeActions()}
        </div>
    )
}

export default ActionBlock;