import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../segs-firebase'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Seminal Segways
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Discover
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
             <li className='nav-item'>
              <Link to='/createPost' className='nav-links'>
                Create Blog Post
              </Link>
            </li>
            <li>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {/* { !isAuth ? button && <Button buttonStyle='btn--outline'>Login</Button> : button && <Button buttonStyle='btn--outline'>Sign Out</Button> } */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
