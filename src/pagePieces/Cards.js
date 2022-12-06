import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/isaac.jpeg')}
              text='Isaac Watts -- University of Utah'
              label='Co-Founder & CEO'
            />
            <CardItem
              src={require('../images/garrett.jpeg')}
              text='Garrett Watts -- Brigham Young University'
              label='Co-Founder & President'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/neto.jpeg')}
              text='Neto Bustillos -- University of Utah'
              label='Head of Charlotte Operations'
            />
            <CardItem
              src={require('../images/nate.jpg')}
              text='Nate Owen -- Brigham Young University'
              label='Chief Technology Officer'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
