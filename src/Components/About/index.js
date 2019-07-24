import React from 'react';
import {AboutSection , AboutInfo , AboutTitle , InfoDir , InfoDesc } from './style.js'

const About = () => {
  return (
    <AboutSection>
    <div className="container">
        <AboutInfo>
            <AboutTitle>About Us</AboutTitle>
            <InfoDir>Eventtus</InfoDir>
            <InfoDesc>
            is one of the most popular online ticketing systems used by entrepreneurs. It helps you reach new audiences searching for events in their area while organizing the back-end information of your event. 
           </InfoDesc>
        </AboutInfo>
    </div>
</AboutSection>
  )
}

export default About;
