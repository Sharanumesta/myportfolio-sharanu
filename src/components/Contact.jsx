import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './css/Contact.css';

function Contact() {
    return (
        <>
            <section className='contact mt-5'>
            <h2 className='text-center m-5 text-uppercase'>Contact Me</h2>
            <div className='contact-info d-flex flex-column align-items-center p-5'>
                <form className='contact-form'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' className='form-control' id='name' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='email' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='subject' className='form-label'>Subject</label>
                        <input type='text' className='form-control' id='subject' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='message' className='form-label'>Message</label>
                        <textarea className='form-control' id='message' rows='4' required></textarea>
                    </div>
                    <div className="text-center pt-3">
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        <section className='media' >
            <div className='social-media text-center container'>
                <h3>Connect with Me</h3>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/sharanumesta' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size='3x' style={{ margin: '0 30px', color: '#0077B5' }} />
                    </a>
                    <a href='https://github.com/Sharanumesta' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} size='3x' style={{ margin: '0 30px', color: '#181717' }} />
                    </a>
                    <a href='mailto:sharanumesta@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faEnvelope } size='3x' style={{ margin: '0 30px', color: '#181717' }} />
                    </a>
                    <a href='https://www.instagram.com/_shara__12' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} size='3x' style={{ margin: '0 30px', color: '#E4405F' }} />
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;
