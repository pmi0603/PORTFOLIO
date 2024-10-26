import React, { useEffect, useState } from 'react';
import './Portfolio_styling.css';


function Home() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    return (
        <div id="heading">
         <div id="heading-container">
          <div id="heading-content">
            <h1>Hi, {greeting}<br /> I am Prashant Mishra</h1>
            <h4>Computer Science Graduate</h4>
          </div>
         <img src={"/images/selfimg.jpg"} alt="pic" id="picture" />
         </div>   
        </div>
    );
}

export default Home;
