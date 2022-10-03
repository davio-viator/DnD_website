import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import SearchBar from '../components/SearchBar';
import CharacterCard from '../components/CharacterCard';

import randomWord from 'random-words';

const Characters = (props) => {

  const [test,setTest] = useState('')

  let charsArray = []
  let slots = 0;

  let races = [
    'Aarakocra ',
    'Dragonborn ',
    'Hill Dwarf ',
    'Mountain Dwarf ',
    'High Elf ',
    'Wood Elf ',
    'Eladrin Elf (Variant) ',
    'Air Genasi ',
    'Earth Genasi ',
    'Fire Genasi ',
    'Water Genasi ',
    'Rock Gnome ',
    'Deep Gnome',
    'Goliath',
    'Half-Elf',
    'Half-Orc',
    'Lightfoot Halfling',
    'Stout Halfling',
    'Human',
    'Variant Human',
    'Tiefling',
    'Vairiant Aasimar'
  ]

  function random(){
    return Math.floor(Math.random() * (20))+1
  }

  function randomMinMax(min,max){
    return Math.floor(Math.random() * (max - min +1 ))+min
  }

  function initializeArray(){
    // charsArray = []
    for(let i =0; i < 15; i++){
      charsArray.push({name:randomWord(),level:random(),race:races[randomMinMax(0,races.length-1)],class:'Cleric/Life Domain'})
    }
    console.log(charsArray);
    slots = charsArray.length
  }


  function createCard(){
    return charsArray.map((item,index) =>{
      return(
        <CharacterCard key={index} values={item} />
      )
    });
  }

  function handleScroll(e) {
    console.log('hi')
  }

  useEffect(()=>{
    // createCard()
    window.addEventListener('scroll',handleScroll)
  },[])
  
  initializeArray()
  let values = {name:'Odof',level:'5',race:'Dragonborn',class:'Cleric/Life Domain'}

  
  return(
    <Container fluid={false}>
      <div className='mt-5 d-flex justify-content-between fs-5'>
        <h1>My characters</h1>
        <Button ><h5 className='ps-2 pe-2'>Create a new character</h5></Button>
      </div>
      <div className='fs-3'>Slots: <span className='fs-3 blue'>{slots}</span></div>
      <SearchBar test={setTest}/> 
      {/* <CharacterCard values={values} /> */}
      <div className='cards-container mb-5 '>
      {createCard()}
      </div>
    </Container>
  )

} 

export default Characters