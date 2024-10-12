import React from 'react';
import './css/Navbar.css';
import Headroom from 'react-headroom';

function Navbar() {
  return (
    <><Headroom>
          <header>
            <div className="containers">
              <div className="logo-brand">
                <a href="#main" className='text-decoration-none fs-1 fw-bold' >Sharanu</a> 
              </div>
              <div>
                <ul className="navitems">
                  <li> <a href='#home'> Home </a> </li>
                  <li> <a href='#skills'> Skills </a> </li>
                  <li> <a href='#about'> About Me </a> </li>
                  <li> <a href='#projects'> Projects </a> </li>
                  <li> <a href='#contact'> Contact Me</a> </li>
                </ul>
              </div>
            </div>
          </header>
    </Headroom>
    </>
  );
}

export default Navbar;
