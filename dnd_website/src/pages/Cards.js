import React, { useEffect, useRef, useState } from 'react';

import Card from '../components/Card';

import NoThumbnail from '../assets/images/no-thumbnail-image.png'

import Axios from 'axios';
import Notes from '../components/Notes';

const Cards = (props) => {

  var newCard = [];
  
  let offset = 0
  const [cards,setCards] = useState([])
  const [noteVisible,setNoteVisible] = useState(false)
  const [cid,setId] = useState()

  function getCards(){
    // setGotCards(false)
    Axios.get(`http://localhost:3030/get-cards?limit=6&offset=${offset}`)
      .then(res => {
        const cardsArray = []
        res.data.forEach((card,index)=>  cardsArray[index] = card)
        newCard = cardsArray;
        setCards(oldCards => [...oldCards,...cardsArray])
        // console.log(res.data,cardsArray);
        // setGotCards(true)
      })
      .catch(err => {
        console.error(err);
      })
      offset+=6      
  }

  const  handleScroll = (e) => {
    let winHeight = window.innerHeight;
    let scroll = e.target.documentElement.scrollTop
    let height = e.target.documentElement.scrollHeight
    if(winHeight+scroll >= height && scroll > 100 && newCard.length>0){
      console.log('at the bottom of the page');
      getCards()
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    getCards()
  },[])

  function handleNotes(){
    return noteVisible?<Notes id={cid}/>:null
  }

  function createCard(){
    return cards.map((item,index) => {
      return(
        <Card key={item.id} 
        className="cards-container-child"
        name={item.name} 
        rank={item.rank}
        keywords={item.keyword}
        ecology={item.ecology}
        strenght={item.strenght} 
        weakness={item.weakness}
        iconSrc={item.imgSrc}
        handleNotes={handleNotes}
        setNoteVisibleprops={setNoteVisible}
        setId={setId}
        cid={cid}
        id={item.id}/>
      )
    })
  }

  return(
    <div>
        {handleNotes()}
      <div className='cards-container ps-5 ms-5 mb-5'>
      {createCard()}
      </div>
    </div>
  )


} 

export default Cards;