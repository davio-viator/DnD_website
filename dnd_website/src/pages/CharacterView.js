import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import StatBlock from '../components/StatBlock';
import HealthBlock from "../components/HealthBlock";

import { useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

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
    
    return(
        <>
            <div className="stat-container">
                {/* <StatBlock name='Strenght' modifier={makeModifier('str')} stat={statBlock.str}/>
                <StatBlock name='Dexterity' modifier={makeModifier('dex')} stat={statBlock.dex}/>
                <StatBlock name='Constitution' modifier={makeModifier('con')} stat={statBlock.con}/>
                <StatBlock name='Intelligence' modifier={makeModifier('int')} stat={statBlock.int}/>
                <StatBlock name='Wisdom' modifier={makeModifier('wis')} stat={statBlock.wis}/>
                <StatBlock name='Charisma' modifier={makeModifier('cha')} stat={statBlock.cha}/> */}
                {makeStatBlock()}
                <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Proficiency</Card.Text>
                    <Card.Title className="t-center mb-0">+3</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Bonus</Card.Footer>
                </Card>
                <Card className="stat-block-size ms-1 me-1 border-red">
                    <Card.Text className="stat-text mb-0">Walking</Card.Text>
                    <Card.Title className="t-center mb-0">30 ft.</Card.Title>
                    <Card.Footer className="t-center pt-0 pb-0">Speed</Card.Footer>
                </Card>
                <div>
                    <div onClick={(e) => handleDisplay(e)} className="stat-inspiration-box-unchecked"></div>
                    <div className="t-center mt-2">Inspiration</div>
                </div>
                <HealthBlock current={35} max={42} temp={0} />
            </div>
        </>

    )
}

export default CharacterView;