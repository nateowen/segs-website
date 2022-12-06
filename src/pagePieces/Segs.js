import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fleet</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/s-plus.png')}
              text='Segway S Plus - Top of the line, award winning, and most dependable Segway on the market.'
              label='Favorite'
            />
            <CardItem
              src={require('../images/ninebot-s.png')}
              text='Ninebot S - Premium Segway scooter'
              label='Best Seller'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/ninebot-kids.png')}
              text='Ninebot S Kids - Same great scooter made for your little ones.'
              label='Kid Friendly'
            />
            <CardItem
              src={require('../images/ninebot-one-s1.jpeg')}
              text='Ninebot One S1 - Top awarded one-wheel scooter on the market.'
              label='Experts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
