import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '../components/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import NoThumbnail from '../assets/images/no-thumbnail-image.png'

import {useNavigate }  from 'react-router-dom';
import { useParams } from 'react-router-dom';


const DeckView = (props) => {

  let offset = 0

  const params = useParams()
    
  const [deck,setDeck] = useState([])

  function getDecksCard(){
    let id = localStorage.getItem('userId')
    Axios.get(`http://localhost:3030/get-cards-deck?id=${id}&deck_id=${params.id}&limit=6&offset=${offset}`)
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
          console.log(item),
          <Card key={index} 
          className="cards-container-child"
          name={item.info_level >=1?item.name:'Unknown'} 
          rank={item.info_level >=2?item.rank:'Unknown'}
          keywords={item.info_level >=3?item.keyword:'Unknown'}
          ecology={item.info_level >=5?item.ecology:'Unknown'}
          strenght={item.info_level >=4?item.strenght:'Unknown'} 
          weakness={item.info_level >=4?item.weakness:'Unknown'}
          iconSrc={item.info_level >=2?item.imgSrc:NoThumbnail}/>
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