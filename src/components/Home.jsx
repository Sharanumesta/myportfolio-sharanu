import React from 'react';
import HeroImage from '../assets/images/hero.png';
import './css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion'; 

function Home() {
  return (
    <>
      <main id='main'>
        <section className='section-hero container mb-5' style={{ padding: '100px 0' }}>
          <div className="container text-center row mt-5">
            <motion.div
              className="col-6 content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}      
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <p className="hero-name">Hi, I'm <br />Sharanu Mesta</p>
              <p className="lead text-start mt-5 fs-3 fw-semibold">
                I'm a passionate developer and IT enthusiast specializing in creating innovative web solutions.
                From building sleek user interfaces to crafting robust backend systems, I strive to bring ideas to life through code.
              </p>
              <div className="btn-groups btn-group">
                <a href="/contact " className='me-5'>
                  <button className='btn btn-primary connect-btn'>Connect with Me</button>
                </a>
                <a href="/projects" className='ms-5'>
                  <button className='btn projects-btn btn-outline-primary'>View Projects</button>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="col-6 hero-image mt-4 img-fluid"
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}      
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <img src={HeroImage} alt="Developer at work" className="img-fluid" />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
