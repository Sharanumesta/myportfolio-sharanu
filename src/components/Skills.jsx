import React from 'react';
import './css/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faNodeJs, faPython, faJava, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; 

function Skills() {
    return (
        <>
            <section className='container'>
                <div className='skills skills-section p-5'>
                    <p className='text-uppercase text-center mb-4 text-info skill'>Skills</p>

                    <div className="row">
                        <motion.div
                            className="col-md-6 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-category">
                                <p className="text-info sub-head">Frontend Development</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" style={{ color: 'orange', fontSize: '24px' }} /> HTML
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" style={{ color: 'blue', fontSize: '24px' }} /> CSS
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faJsSquare} className="skill-icon" style={{ color: '#F0DB4F', fontSize: '24px' }} /> JavaScript
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faReact} className="skill-icon" style={{ color: '#61DBFB', fontSize: '24px' }} /> React
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faBootstrap} className="skill-icon" style={{ color: '#7952B3', fontSize: '24px' }} /> Bootstrap
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-md-6 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-category">
                                <p className="text-info sub-head">Backend Development</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faNodeJs} className="skill-icon" style={{ color: '#8CC84B', fontSize: '24px' }} /> Node.js
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" style={{ color: '#47A248', fontSize: '24px' }} /> MongoDB
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" style={{ color: '#00758F', fontSize: '24px' }} /> MySQL
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="row">
                        <motion.div
                            className="col-md-6 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-category">
                                <p className="text-info">Programming Languages</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faJava} className="skill-icon" style={{ color: '#E87722', fontSize: '24px' }} /> Java
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faPython} className="skill-icon" style={{ color: '#3572A5', fontSize: '24px' }} /> Python
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faCode} className="skill-icon" style={{ color: '#A8B400', fontSize: '24px' }} /> C
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-md-6 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-category">
                                <p className="text-info sub-head">Tools & Technologies</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faGit} className="skill-icon" style={{ color: '#F05032', fontSize: '24px' }} /> Git
                                    </li>
                                    <li className="list-inline-item">
                                        <FontAwesomeIcon icon={faBootstrap} className="skill-icon" style={{ color: '#7952B3', fontSize: '24px' }} /> Responsive Design
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;