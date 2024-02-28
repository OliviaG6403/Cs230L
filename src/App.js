import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Navbar from './Navbar.js';
import React from 'react';

function App() {

  return (
    <div className="App">
    <Navbar></Navbar>
      
      <h1>
        CS 230L
      </h1>

      <h2>
        Section - 001
      </h2>

      <p>
        WVU ID: 800367180
      </p>

      <p>
        Hi I am Olivia
      </p>
    <Card></Card>
      
    </div>
  );
}

export default App;
