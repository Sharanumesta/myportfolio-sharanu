import React from 'react';
import './css/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className='footer'>
        <div className="footer-container fs-3">
          <p>&copy; 2024 Shara Portfolio. All rights reserved</p>
          <p className='fs-4'>Made with ❤️ by Sharanu Mesta</p>
          <button onClick={scrollToTop} className="btn btn-secondary mt-2">
            Go to Top
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
