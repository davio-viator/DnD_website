import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '../components/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import {useNavigate }  from 'react-router-dom';


const DeckView = (props) => {

  let offset = 0
    
  const [deck,setDeck] = useState([])

  function getDecksCard(){
    let id = localStorage.getItem('userId')
    Axios.get(`http://localhost:3030/get-cards-deck?id=${id}&limit=6&offset=${offset}`)
    .then(res => {
      const cardsArray = []
      // let x = []
      // res.data.forEach((card,index)=>  { 
      //   // cardsArray[index] = card
      //   x[index] = addCards(card,index)
      //   console.log(x)
      // })
      res.data.forEach((card,index)=>  cardsArray[index] = card)
      setDeck(oldDeck => [...oldDeck, ...cardsArray])
    })
    .catch(err =>{
      console.error(err)
    })
    offset+=6
  }

  const  handleScroll = (e) => {
    let winHeight = window.innerHeight;
    let scroll = e.target.documentElement.scrollTop
    let height = e.target.documentElement.scrollHeight
    if(winHeight+scroll >= height && scroll > 100){
      // console.log('at the bottom of the page');
      getDecksCard()
    }
  }

  function addCards(card,index){
    const existingIds = deck.map((addedCard)=>addedCard.id);

    if(!existingIds.includes(card.id)){
      return card
    }
  }

  function createCard(){
    let cards = deck
    if(cards){
      return cards.map((item,index) => {
        return(
          <Card key={index} 
          className="cards-container-child"
          name={item.name} 
          rank={item.rank}
          keywords={item.keyword}
          ecology={item.ecology}
          strenght={item.strenght} 
          weakness={item.weakness}
          iconSrc={item.imgSrc}/>
        )
      })
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    getDecksCard()
  },[])

  return(
    <div className='cards-container ps-5 ms-5 mb-5'>
        {createCard()}
    </div>
  )
}

export default DeckView