import React from "react";
import './Portfolio_styling.css';

export default function Project() {

  return (
    <section>
      <h4 className="project_heading">PROJECTS:</h4>
      <div className="project_container">
        <div className="project_link">
          <img src="/images/nick-chong-N__BnvQ_w18-unsplash.jpg" alt="STOCK" loading="lazy" className="project_img" />
          <a href="https://github.com/pmi0603/Stock_Prediction" target="_blank" rel="noopener noreferrer">STOCK PRICE PREDICTION</a>
        </div>

        <div className="project_link">
          <img src="/images/national-cancer-institute-pCqzMe04s8g-unsplash.jpg" alt="DISEASE" loading="lazy" className="project_img" />
          <a href="https://github.com/pmi0603/Disease-Prediction" target="_blank" rel="noopener noreferrer">DISEASE PREDICTION</a>
        </div>

        <div className="project_link">
          <img src="/images/rubaitul-azad-qqV7i39Ekj0-unsplash.jpg" alt="AUDIO" loading="lazy" className="project_img" />
          <a href="https://github.com/pmi0603/Audio-Translator" target="_blank" rel="noopener noreferrer">AUDIO TRANSLATOR</a>
        </div>

        <div className="project_link">
          <img src="/images/dad-hotel-Y-bJWAjPzsY-unsplash.jpg" alt="HOTEL" loading="lazy" className="project_img" />
          <a href="https://github.com/pmi0603/Hotel-Booking-System" target="_blank" rel="noopener noreferrer">ROOM BOOKING SYSTEM</a>
        </div>

        <div className="project_link">
          <img src="/images/taskmanager.png" alt="Task Manager" loading="lazy" className="project_img" />
          <a href="https://github.com/pmi0603/Task_Manager" target="_blank" rel="noopener noreferrer">TASK MANAGER</a>
        </div>
      </div>
    </section>
  )


}