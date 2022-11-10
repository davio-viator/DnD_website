import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const StatBlock = (props) => {

    const [stat,setStat] = useState({mod:0,roll:0})

    const statName = {
        str:'Strength',
        dex:'Dexterity',
        con:'Constitution',
        int:'Intelligence',
        wis:'Wisdom',
        cha:'Charisma'
    }

    function handleStatName(name){
        return statName[name]
    }

    function rolling(){
        let rolledStat = props.statRolling()
        let modifier = props.makeModifier(rolledStat)
        setStat({...stat,mod:modifier,roll:rolledStat})
    }

    return(
        <div>
            <Card className="stat-block-size ms-1 me-1 border-red">
                <Card.Text className="stat-text mb-0">{handleStatName(props.name)}</Card.Text>
                <Card.Title className="t-center mb-0">{!props.rolling?props.modifier:stat.mod}</Card.Title>
                <Card.Footer className="t-center pt-0 pb-0">{!props.rolling?props.stat:stat.roll}</Card.Footer>
            </Card>
            {props.rolling?<Button onClick={()=>rolling()} disabled={stat.roll!=0} className="pt-0 pb-0 mt-2" style={{margin:'auto',position: 'relative',left: '50%',transform: 'translate(-50%, 0px)'}}>Roll</Button>:null}
        </div>
    )
}

export default StatBlock;