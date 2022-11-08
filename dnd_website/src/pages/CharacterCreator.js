import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import CharacterCreatorProfile from '../components/CharacterCreatorProfile';
import CharacterIconSelector from '../components/CharacterIconSelector';
import RaceCard from '../components/RaceCard';
import SearchBar from '../components/SearchBar';

const CharacterCreator = (props) => {


  const [src,setSrc] = useState('')
  const [displayed,setDisplayed] = useState(false)

  function createRaces(){
    return <RaceCard/>
  }

  return(
    <div>
      {displayed?<CharacterIconSelector imgsrc={src} setSource={setSrc} setDisplayed={setDisplayed}/>:null}
      <div style={{width:'50%',position:'absolute',left:'50%',transform:'translate(-50%,0%)'}}>
        <Container fluid={false}>
          <CharacterCreatorProfile imgsrc={src} setDisplayed={setDisplayed}/>
          <br/>
          <SearchBar icon submenue={false} placeholder="Search ..."/>
            {createRaces()}
        </Container>
      </div>
    </div>
  )

}

export default CharacterCreator;