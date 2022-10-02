import React from 'react'; 

import NavBar from '../components/NavBar';

import Axios from 'axios';

const MainPage = () => {

  // mm-nav-item__label mm-nav-item__label--has-content

  return(
    <div>
      <NavBar links={['Characters', 'Deck', 'Cards' ,'Notes','Games' ,]}/>
      {/* MainPage works !!! */}
    </div>
  )

}

export default MainPage;