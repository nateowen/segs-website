import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../pagePieces/HeroContainer.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img alt='Central Park' src={require('../images/central-park.jpeg')}/>
      <h1>Discover your favorite cities</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Where to next?
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
