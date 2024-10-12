import React from 'react'
import './css/Project.css'
import HeroImage from '../assets/images/hero.png'

function Projects() {
  return (
    <>
        <section className='projects-section mt-5'>
            <div className='container'>
                <h2 className='text-uppercase text-center'>Projects</h2>
                <div className='row mt-4 d-flex justify-content-around'>
                    <div className='col-md-5 mb-4'>
                        <div className='card'>
                            <img src={HeroImage} alt="Blood Bank Project Thumbnail" className='card-img-top' />
                            <div className='card-body'>
                                <h3 className='card-title'>Blood Bank Management System</h3>
                                <p className='card-text'>
                                    A web application designed to facilitate blood donation processes. As the frontend developer, I created a responsive user interface using HTML, CSS, Bootstrap, and JavaScript to enhance user experience and streamline donor registration and search functionalities.
                                </p>
                                <div className="button">
                                    <a href="#" className='btn btn-primary'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 mb-4'>
                        <div className='card'>
                            <img src={ HeroImage } alt="Portfolio Website Thumbnail" className='card-img-top' />
                            <div className='card-body'>
                                <h3 className='card-title'>Personal Portfolio Website</h3>
                                <p className='card-text'>
                                This portfolio website showcases my skills and projects as a developer. The site is built with React and Bootstrap, 
    featuring a modern design and user-friendly navigation. I continuously update this portfolio to reflect my latest work 
    and keep improving my skills in web development.
                                </p>
                                <div className="button">
                                    <a href="#" className='btn btn-primary button'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects
