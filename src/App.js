import React, { Component } from 'react';
import Nav from './nav.js'
import Subheader from './Subheader.js'
import Parag from './header.js'
import Cards from './Card.js'
import Links1 from './Company.js'
import Positions from './Position.js'
import Citys from './City.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
         <Nav /> 
         <Subheader />
         <Parag/>
         <Cards/>
         <Links1 />
         <Positions />
         <Citys />
         <Footer />
      </div>
     
    );
  }
}

export default App;
