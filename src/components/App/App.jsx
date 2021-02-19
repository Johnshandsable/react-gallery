import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

// *********** IMPORT COMPONENTS ***************
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {

  // *********** ON-START ***************
  useEffect(() => {
    getData();
  }, []);

  // *********** VARIABLES ***************
  const [galleryList, setGalleryList] = useState([]);


  // *********** ROUTES ***************
  function getData() {
    /*
      GET ROUTE to /gallery
    */
    
    axios.get('/gallery', (req, res) => {
      console.log('CLIENT - GET inside getData() ');
    })
    .then((response) => {
      console.log(' .then CLIENT - GET - got a response', response);
      console.log(' .then CLIENT - GET - response.data', response.data);
      setGalleryList(response.data)
    })
    .catch((error) => {
      console.log('.catch CLIENT - GET - An error was received', error);
    })
  }

    return (
      <div className="App"> 
        <Header />
        <GalleryList />
      </div>
    );
}

export default App;
