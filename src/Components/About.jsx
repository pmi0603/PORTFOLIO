import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio_styling.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
        Having a keen interest in DevOps also. I have good knowledge of HTML, CSS, JAVASCRIPT, and MERN, also in Git, Jenkins, Kubernetes.<br></br>
        Along with development, I have a good hold in Data Structures and Algorithms.
    </div>
</div>

            <div id="contact">
<div id="phone">
    <FontAwesomeIcon icon={faPhone} id="phone_icon" />
    <a href="tel://+91 7973745181">7973745181</a>
</div>

<div id="mail">
    <FontAwesomeIcon icon={faEnvelope} id="mail_icon" />
    <a href="mailto:pm622244@gmail.com" target="_blank" rel="noopener noreferrer">PrashantMishra</a>
</div>
    

    
<div id="resume">
    <FontAwesomeIcon icon={faDownload} id="resume_icon" />
    <a href={"/images/PrashantMishra.pdf"} download>Resume</a>
</div>
    
</div>


<section id="social">
          <Container>
            <div>
                <a href="https://www.instagram.com/pmi062003/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} id="instagram_icon" />
                </a>
            </div>

          </Container>
                                                                
             <Container>
            <div>
                <a href="https://github.com/pmi0603" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}  id="github_icon" />
                </a>
            </div>

          </Container>
            
        </section>


        </section>
    );
}

export default About;
