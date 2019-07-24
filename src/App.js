import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom' ;
import './App.css';

import Navbar from './Components/Navbar'
import Index from './Components/Index';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' Component={Index} />
      <Index />
    </BrowserRouter>
  );
 }
}

export default App;
