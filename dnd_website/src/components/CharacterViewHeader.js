import React from "react";
import Container from "react-bootstrap/esm/Container";

const CharacterViewHeader = (props) => {

    // name='Odof' sex='male' race='Dragonborn' class='Cleric' level={5} xp={1267} xpToNewLevel={6000}

    return(
        <Container fluid={true} className="banner character-view-header" >
             {/* Character view hearder works !!! */}
             <Container className="pb-5">
                <img className='character-icon border-red-icon' src="https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=60&height=60&fit=bounds&quality=95&auto=webp"/>
                <ul className="d-inline-block position-absolute ps-3" style={{top:'10%',listStyleType:'none'}}>
                    <li className="character-name" style={{color:'white'}} >{props.name}</li>
                    <li className="character-info">{props.sex} {props.race} {props.class} {props.level}</li>
                    <li className="character-info">
                        <span>lvl {props.level}. </span>
                        <progress value={props.xp} max={props.xpToNewLevel}></progress>
                        <span> lvl {props.level+1}.</span>
                    </li>
                    <li className="t-center character-info">
                        <span>{props.xp}/{props.xpToNewLevel} </span>
                    </li>
                </ul>
             </Container>
        </Container>
    )

}

export default CharacterViewHeader;