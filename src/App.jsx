import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  return (
    <>
      <Navbar />

      <section id="#home">
        <Home />
      </section>

      <motion.div
        initial="hidden"
        animate={scrollY > 300 ? 'visible' : 'hidden'}  
        variants={fadeIn}
      >
      <section  id="skills">
        <Skills
        />
        
      </section>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollY > 800 ? 'visible' : 'hidden'} 
        variants={fadeIn}
      >
        <section id="about">
          <AboutMe />
        </section>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollY > 1300 ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        <section id='projects'>
        <Projects/>
      </section>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollY > 1800 ? 'visible' : 'hidden'} 
        variants={fadeIn}
      >
      <section id='contact'>
        <Contact/>
      </section>
      </motion.div>

      <Footer />
    </>
  );
}

export default App;
