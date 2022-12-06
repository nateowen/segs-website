import React from 'react';
import './Footer.css';
import { Button } from '../components/Button';
import { Link, NavStyledLink } from 'react-router-dom';
import styled from 'styled-components'

function Footer() {

    const StyledLink = styled(Link) `
        font-size: 14px;
    `;

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Segs Blog Newsletter today!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>About Us</h3>
            <StyledLink to='/segways'>How it works</StyledLink>
            <StyledLink to='/'>Locations</StyledLink>
            <StyledLink to='/'>Careers</StyledLink>
            <StyledLink to='/'>Testimonials</StyledLink>
            <StyledLink to='/'>Terms & Conditions</StyledLink>
          </div>
          <div class='footer-link-items'>
            <h3>Contact Us</h3>
            <StyledLink to='/'>Contact</StyledLink>
            <StyledLink to='/'>Support</StyledLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <StyledLink to='/'>Instagram</StyledLink>
            <StyledLink to='/'>Facebook</StyledLink>
            <StyledLink to='/'>Youtube</StyledLink>
            <StyledLink to='/'>Twitter</StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
