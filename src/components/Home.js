import React from 'react';
import './Home.css';
import logopineapple from '../images/logopineapple.jpg';
import logobeard from '../images/logobeard.jpg';
import logoumbrella from '../images/logoumbrella.jpg';




function Home() {
    return (
        <div className="Home">
            <h1>WELCOME</h1>
            <img  className="GritFitLogo" src={logopineapple} alt="pineapple logo" />
            <img  className="GritFitLogo" src={logobeard} alt="beard logo" />
            <img  className="GritFitLogo" src={logoumbrella} alt="umbrella logo" />
            
        </div>
      
    )
}

export default Home;