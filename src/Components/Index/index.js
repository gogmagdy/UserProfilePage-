import React , { Component } from 'react';

import Home from './../Home'
import About from './../About'
import Event from './../Event'
import Footer from './../Footer'
import Profile from './../Profile'
import SocialMedia from './../SocialMedia'


class Index extends Component {
  render(){
  return (
    <div>
      <Home />
      <Event />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
 }
}

export default Index;
