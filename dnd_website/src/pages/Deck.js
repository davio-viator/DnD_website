import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '../components/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import {useNavigate }  from 'react-router-dom';


const Deck = (props) => {
  
  let offset = 0
    
  const [deck,setDeck] = useState([])

  const navigate = useNavigate();
  
  function getDecksCard(){
    let id = localStorage.getItem('userId')
    Axios.get(`http://localhost:3030/get-cards-deck?id=${id}&limit=6&offset=${offset}`)
    .then(res => {
      const cardsArray = []
      res.data.forEach((card,index)=>  {        cardsArray[index] = card})
      setDeck(oldDeck => [...oldDeck, ...cardsArray])
    })
    .catch(err =>{
      console.error(err)
    })
    offset+=6
  }

  function getDecks(){
    let id = localStorage.getItem('userId')
    Axios.get(`http://localhost:3030/get-decks?id=${id}&limit=6&offset=${0}`)
    .then(res => {
      console.log(res.data)
      const deckArray = []
      let x = []
      // res.data.forEach((card,index)=>  deckArray[index] = card)
      res.data.forEach((card,index)=>  { 
        x[index] = addCards(card,index)
        console.log(x)
      })
      setDeck(oldDeck => [...oldDeck, ...x])
    })
    .catch(err=>{

    })
  }

  const  handleScroll = (e) => {
    let winHeight = window.innerHeight;
    let scroll = e.target.documentElement.scrollTop
    let height = e.target.documentElement.scrollHeight
    if(winHeight+scroll >= height && scroll > 100){
      // console.log('at the bottom of the page');
      // getDecksCard()
      getDecks()
    }
  }

  function addCards(card,index){
    const existingIds = deck.map((addedCard)=>addedCard.id);

    if(!existingIds.includes(card.id)){
      console.log('first',card)
      return card
    }
    console.log('second',card)
  }

  function removeDupliate(array,key){
    var check = new Set();
    return array.filter(obj => check.has(obj[key]) && check.add(obj[key]));
  }

  function createDeck(){
    let array = removeDupliate(deck,'id5')
    return deck.map((item,index)=>{
     return(
      <div key={index} style={{width:'400px'}} className='pt-3 pb-3 ps-5 border-red-health mb-2 mt-2 ms-3 me-3 d-flex justify-content-between'>
        {item.name}
        <Button key={index} onClick={(e) => handleClick(e,item.id)} className='ms-5 me-5'>View</Button>
      </div>
     ) 
    })
  }

  function handleClick(e,id){
    navigate(`/deck/${id}`)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    // getDecksCard()
    getDecks()
  },[])

  return(
      // <div className='cards-container ps-5 ms-5 mb-5'>
      //   {createCard()}
      // </div>
      <Container className='cards-container t-cent0er mt-5'>
        {createDeck()}
      </Container>
    )
} 

export default Deck;