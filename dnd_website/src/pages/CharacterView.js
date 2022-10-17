import React, { useEffect } from "react";
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

const CharacterView = (props) => {
    
    const params = useParams()

    let statBlock = {
        str:rollStats(),
        dex:rollStats(),
        con:rollStats(),
        int:rollStats(),
        wis:rollStats(),
        cha:rollStats()
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

    function createInfoBlock(){
        return(
            <>
                 <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Proficiency</Card.Text>
                    <Card.Title className="t-center mb-0">+{randomMinMax(2,5)}</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Bonus</Card.Footer>
                </Card>
                <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Walking</Card.Text>
                    <Card.Title className="t-center mb-0">30 ft.</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Speed</Card.Footer>
                </Card>
                <div className="me-2 front-row">
                    <div onClick={(e) => handleDisplay(e)} className="stat-inspiration-box-unchecked ms-4"></div>
                    <div className="t-center ms-1 mt-2">Inspiration</div>
                </div>
            </>
        )
    }
    
    return(
        <>
            <CharacterViewHeader name='Odof' sex='Male' race='Dragonborn' class='Cleric' level={5} xp={Math.floor(Math.random()*6001)} xpToNewLevel={6000} />
            <div className="stat-container">
                {makeStatBlock()}
                {createInfoBlock()}
                <HealthBlock current={35} max={42} temp={12} />
            </div>
            <SavingThrowsBlock/>
            <Senses/>
            <Proficiencies />
            <SkilsBlock/>
            <SubStatBlock/>
            <PrimaryBox/>
        </>

    )
}

export default CharacterView;