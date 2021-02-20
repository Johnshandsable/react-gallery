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
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log('.catch CLIENT - GET - got an error', error);
    })
  } // end getData

  function updateData(galleryItemId) {
    /*
      PUT ROUTE to /gallery/like/id
    */
    axios.put(`/gallery/like/${galleryItemId}`, (req, res) => {
      console.log('CLIENT - PUT inside updateData() ');
    })
    .then((response) => {
      console.log(' .then CLIENT - PUT - got a response', response);
      getData();
    })
    .catch((error) => {
      console.log(' .catch CLIENT - PUT - got an error ', error);
    })
  } // end updateData

  function deleteData(galleryItemId) {
    /*
      DELETE ROUTE to /gallery/id
    */
    axios.delete(`/gallery/${galleryItemId}`, (req, res) => {
      console.log('CLIENT - DELETE inside deleteData() ');
    })
    .then((response) => {
      console.log(' .then CLIENT - DELETE - got a response', response);
      getData();
    })
    .catch((error) => {
      console.log(' .catch CLIENT - DELETE - got an error ', error);
    })
  } // end deleteData

  return (
    <div className="App"> 
      <Header />
      <GalleryList 
        galleryList = {galleryList}
        updateData = {updateData}
        deleteData = {deleteData}
      />
    </div>
  ); // end return 
}

export default App;
