import React from 'react'
import './css/AboutMe.css'
import HeroImage from '../assets/images/hero.png'

function AboutMe() {
  return (
    <>
        <section className='about-me mt-5'>
            <div className='container d-flex flex-column flex-lg-row align-items-center justify-content-center'>
                <div className='about-image col-lg-6 mt-4 mt-lg-0 d-flex align-items-center justify-content-center'>
                    <img src={HeroImage} alt="Sharanu Mesta" className='img-fluid rounded-circle' />
                </div>
                <div className='about-text col-lg-6'>
                    <h2 className='text-uppercase text-center text-lg mb-5'>About Me</h2>
                    <p className=' fw-4 text-lg'>
                        Hi, I'm Sharanu Mesta, a dedicated BE CSE student with a passion for technology and innovation. 
                        I love creating responsive web applications and exploring new technologies to enhance user experiences.
                    </p>
                    <p className='lead text-lg'>
                        With a strong foundation in both frontend and backend development, I strive to bridge the gap between aesthetics and functionality.
                        My goal is to leverage my skills to solve real-world problems through technology and continuous learning.
                    </p>
                </div>
            </div>
        </section>

    </>
  )
}

export default AboutMe
