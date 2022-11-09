import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import StatBlock from '../components/StatBlock';
import HealthBlock from "../components/HealthBlock";
import CharacterViewHeader from "../components/CharacterViewHeader";
import SavingThrowsBlock from "../components/SavinThrowsBlock";
import Senses from "../components/Senses";
import Proficiencies from "../components/ProficienciesBlock";
import SkilsBlock from "../components/SkillsBlock";

import { useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import SubStatBlock from "../components/SubStatBlock";
import PrimaryBox from "../components/PrimaryBox";

import Axios from 'axios';

let statBlock 

const CharacterView = (props) => {
    
    const params = useParams()

    const [character,setCharacter] = useState({})

    async function getCharacterDb(){
        Axios.get('http://localhost:3030/get-character-db-test')
        .then(res => {
            localStorage.removeItem('spells')
            localStorage.setItem('spells',JSON.stringify(res.data[0].spells))
            setCharacter(res.data[0])
            statBlock = {
                str:res.data[0].stats.str.stat,
                dex:res.data[0].stats.dex.stat,
                con:res.data[0].stats.con.stat,
                int:res.data[0].stats.int.stat,
                wis:res.data[0].stats.wis.stat,
                cha:res.data[0].stats.cha.stat
            }
        })
        .catch(err =>{
            console.error(err)
        })
    }


    function randomMinMax(min,max){
        return Math.floor(Math.random() * (max - min +1 ))+min
    }

    function makeModifier(name){        
        let stat = Math.floor( (statBlock[name] - 10)/2 )
        return stat<0?stat:'+'+stat
    }

    function rollStats(){
        let rolls = []
        for (let i = 0; i < 4; i++) {
            rolls.push(randomMinMax(0,6))            
        }
        rolls = rolls.sort().filter((_,i) => i) 

        return rolls.reduce((x,y) => {
            return x+y
        },0)
    }

    function makeStatBlock(){
        let array = Object.keys(statBlock)
        return array.map((item,index) => {
            return(
                // console.log(item,index),
                <StatBlock key={index} name={item} 
                modifier={makeModifier(item)} 
                stat={statBlock[item]}/>
            )
        })
    }

    function handleDisplay(e){
        let target =  e.currentTarget
        if(target.classList.contains('stat-inspiration-box-unchecked')){
            target.classList.remove('stat-inspiration-box-unchecked')
            target.classList.add('stat-inspiration-box-checked')
        }else{
            target.classList.add('stat-inspiration-box-unchecked')
            target.classList.remove('stat-inspiration-box-checked')
        }
    }

    useEffect(()=>{
        getCharacterDb()
    },[])

    function createInfoBlock(){
        let className = ''
        character.substats.inspiration?className='stat-inspiration-box-checked ms-4':className='stat-inspiration-box-unchecked ms-4';
        return(
            <>
                 <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Proficiency</Card.Text>
                    <Card.Title className="t-center mb-0">+{character.substats.proficiency}</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Bonus</Card.Footer>
                </Card>
                <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Walking</Card.Text>
                    <Card.Title className="t-center mb-0">{character.substats.speed} ft.</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Speed</Card.Footer>
                </Card>
                <div className="me-2 front-row">
                    <div onClick={(e) => handleDisplay(e)} className={className}></div>
                    <div className="t-center ms-1 mt-2">Inspiration</div>
                </div>
            </>
        )
    }
    
    return(
        <>
        {character.substats?
            <div className="character-view-bg">
                <CharacterViewHeader name='Odof' sex='Male' race='Dragonborn' class='Cleric' level={5} xp={Math.floor(Math.random()*6001)} xpToNewLevel={6000} />
                <div className="stat-container">
                    {makeStatBlock()}
                    {createInfoBlock()}
                    <HealthBlock current={character.substats.current_health} max={character.substats.max_health} temp={character.substats.temp} />
                </div>
                {/* <div style={{display:'flex',flexDirection:'row',justifyItems:'start'}}> */}
                    {/* <div style={{display:'flex',flexDirection:'column'}}> */}
                        <SavingThrowsBlock values={character.saving_throws}/>
                        <Senses values={character.stats}/>
                        <Proficiencies />
                    {/* </div> */}
                    {/* <div style={{display:'flex',flexDirection:'column'}}> */}
                        <SkilsBlock skills={character.skills} stats={character.stats} proficiency={character.substats.proficiency} />
                    {/* </div> */}
                    {/* <div style={{display:'flex',flexDirection:'column'}}> */}
                        <SubStatBlock/>
                        <PrimaryBox/>
                    {/* </div> */}
                {/* </div> */}
            </div>:
            null}
        </>
        

    )
}

export default CharacterView;