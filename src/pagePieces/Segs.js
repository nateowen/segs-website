import React from 'react';
import './Cards.css';
import ProductItem from './ProductItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Fleet</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProductItem
              src={require('../images/s-plus.png')}
              text='Segway S Plus - Top of the line, award winning, and most dependable Segway on the market.'
              label='$999.99'
              id='1'
            />
            <ProductItem
              src={require('../images/ninebot-s.png')}
              text='Ninebot S - Premium Segway scooter. For those who just want to have a good time.'
              label='$750.99'
              id='2'
            />
          </ul>
          <ul className='cards__items'>
            <ProductItem
              src={require('../images/ninebot-kids.png')}
              text='Ninebot S Kids - Same great scooter made for your little ones.'
              label='$650.99'
              id='3'
            />
            <ProductItem
              src={require('../images/ninebot-one-s1.jpeg')}
              text='Ninebot One S1 - Top awarded one-wheel scooter on the market.'
              label='$550.99'
              id='4'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
