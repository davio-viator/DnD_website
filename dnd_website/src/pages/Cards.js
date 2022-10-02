import React, { useEffect, useRef, useState } from 'react';

import Card from '../components/Card';

import Axios from 'axios';

let cardsArray = []

const Cards = (props) => {

  const [gotCards,setGotCards] = useState(false)
  

  function getCards(){
    setGotCards(false)
    Axios.post('http://localhost:3030/get-cards')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          cardsArray[i] = res.data[i]
        }
        setGotCards(true)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(()=>{
    getCards()
  },[])

  function createCard(){
    return cardsArray.map((item,index) => {
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

  return(
    <div className='cards-container ps-5 ms-5 mb-5'>
     {gotCards?createCard():null}
    </div>
  )


} 

export default Cards;