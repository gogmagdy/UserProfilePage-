import React from 'react';

import {HomeSection , HomeInformation , HomeBtn , HomeDesc , HomeInfo ,HomeTitle} from './style.js'

const Home = () => {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hi , Hagar Magdy</HomeTitle>
                    <HomeInfo>Eventtus</HomeInfo>
                    <HomeDesc>
                    Eventtus is known for its easy-to-use platform which helps users set up their events in minutes. Simply add a description, title, cover photo, and set your price before hitting publish. Eventtus takes care of the rest.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>

  )
}

export default Home;
 
