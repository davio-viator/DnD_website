import React from "react";
import Card from "react-bootstrap/Card";

const StatBlock = (props) => {

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

    return(
        <Card className="stat-block-size ms-1 me-1 border-red">
            <Card.Text className="stat-text mb-0">{handleStatName(props.name)}</Card.Text>
            <Card.Title className="t-center mb-0">{props.modifier}</Card.Title>
            <Card.Footer className="t-center pt-0 pb-0">{props.stat}</Card.Footer>
        </Card>
    )
}

export default StatBlock;