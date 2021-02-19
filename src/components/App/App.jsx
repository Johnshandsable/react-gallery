import React from 'react';
import './App.css';
import axios from 'axios';

// *********** IMPORT COMPONENTS ***************
import Header from '../Header/Header';

function App() {


  // *********** ROUTES ***************
  function getData() {
    /*
      GET ROUTE
    */
    console.log('CLIENT - GET ');
  }

    return (
      <div className="App"> 
        <Header />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
