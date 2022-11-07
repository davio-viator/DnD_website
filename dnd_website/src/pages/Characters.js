import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import SearchBar from '../components/SearchBar';
import CharacterCard from '../components/CharacterCard';

import randomWord from 'random-words';

const Characters = (props) => {

  const [search,setSearch] = useState('')
  const [sort,setSort] = useState('createdAt DESC')

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

  function randomDate(){
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  }

  function initializeArray(){
    // charsArray = []
    for(let i =0; i < 15; i++){
      charsArray.push({name:randomWord(),level:random(),race:races[randomMinMax(0,races.length-1)],class:'Cleric/Life Domain',id:i+1,createdAt:randomDate(),updatedAt:randomDate()})
    }
    slots = charsArray.length
  }


  function createCard(){
    let sortedArray = handleSort(sort)
    console.log(sortedArray);
    return sortedArray.map((item,index) =>{
      let exist = item.name.includes(search) || item.class.includes(search) || item.race.includes(search) || item.level===parseInt(search)
      console.log(exist);
      if(exist){
        return(
          <div key={index+item.name}>
            {exist?<CharacterCard key={index} values={item} />:null}
          </div>
        )
      }
    });
  }

  function handleSort(order){
    let sortedArray = []
    sortedArray = charsArray
    switch (order) {
      case 'createdAt DESC':
        sortedArray.sort(function(a,b){
          if (a.createdAt < b.createdAt) return -1
          if (a.createdAt > b.createdAt) return 1
          return 0
        })
        break;
    
      case 'createdAt ASC':
        sortedArray.sort(function(a,b){
          if (a.createdAt > b.createdAt) return -1
          if (a.createdAt < b.createdAt) return 1
          return 0
        })
        break;
    
      case 'name ASC':
        sortedArray.sort(function(a,b){
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
        break;
    
      case 'name DESC':
        sortedArray.sort(function(a,b){
          if (a.name > b.name) return -1
          if (a.name < b.name) return 1
          return 0
        })
        break;
    
      case 'level DESC':
        sortedArray.sort(function(a,b){
          if (a.level < b.level) return -1
          if (a.level > b.level) return 1
          return 0
        })
        break;
    
      case 'level ASC':
        sortedArray.sort(function(a,b){
          if (a.level > b.level) return -1
          if (a.level < b.level) return 1
          return 0
        })
        break;
    
      case 'updatedAt ASC':
        sortedArray.sort(function(a,b){
          if (a.updatedAt > b.updatedAt) return -1
          if (a.updatedAt < b.updatedAt) return 1
          return 0
        })
        break;
    
      case 'updateddAt DESC':
        sortedArray.sort(function(a,b){
          if (a.updatedAt < b.updatedAt) return -1
          if (a.updatedAt > b.updatedAt) return 1
          return 0
        })
        break;
    
      default:
        break;
    }
    return sortedArray
  }

  function handleScroll(e) {
    // console.log('hi')
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
        <SearchBar placeholder="Search by Name, Level, Class, Race, or Campaign" search={setSearch} sort={setSort} /> 
        {/* <CharacterCard values={values} /> */}
        <div className='cards-container mb-5 '>
        {createCard()}
        </div>
    </Container>
  )

} 

export default Characters