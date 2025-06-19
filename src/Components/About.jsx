import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio_styling.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';


function About() {
    return (
        <section id="about_container">
            <div id="intro">
                <h1>Hi,<br></br>
                    I am
                </h1>
                <h2 id="red">Prashant Mishra</h2>
                <br></br>
                <h3>Front-End Developer</h3>

                <div id="intro_2">
                    Based in Dehradun. I have done Btech in Computer Science from Graphic Era Hill University.<br></br>
                    Having a keen interest in DevOps. I have good knowledge of HTML, CSS, JAVASCRIPT, Git and Jenkins.
                    Along with development, I have a good hold in Data Structures and Algorithms.
                </div>
            </div>


            <div id="contact">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="icon contact-icon" />
                    <a href="tel://+91 7973745181">7973745181</a>
                </div>

                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon contact-icon" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantmishra06032003@gmail.com" >PrashantMishra</a>
                </div>



                <div className="contact-item">
                    <FontAwesomeIcon icon={faDownload} className="icon contact-icon" />
                    <a href={"/images/PrashantMishra.pdf"} download>Resume</a>
                </div>

            </div>


            <section id="social">

                <Container>
                    <div>
                        <a href="https://github.com/pmi0603" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="github_icon icon" />
                        </a>
                    </div>

                </Container>

                <Container>
                    <div>
                        <a href="https://www.linkedin.com/in/prashant-mishra-2b194b256/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin_icon icon" />
                        </a>
                    </div>

                </Container>


            </section>


        </section>
    );
}

export default About;
