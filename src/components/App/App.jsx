import React, { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/roboto';
import axios from 'axios';
import swal from 'sweetalert';

// *********** IMPORT COMPONENTS ***************
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {
  // *********** ON-START ***************
  useEffect(() => {
    getData();
  }, []);

  // *********** VARIABLES ***************
  const [galleryList, setGalleryList] = useState([]);

  // *********** FUNCTIONS ***************

  // *********** ROUTES ***************
  function getData() {
    /*
      GET ROUTE to /gallery
    */
    axios
      .get('/gallery', (req, res) => {
        console.log('CLIENT - GET inside getData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - GET - got a response', response);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('.catch CLIENT - GET - got an error', error);
      });
  } // end getData

  function addData(imagePath, imageDescription) {
    axios
      .post('/gallery', { imagePath, imageDescription }, (req, res) => {
        console.log('CLIENT - POST inside addData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - POST - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log('.catch CLIENT - GET - got an error', error);
      });
  }

  function updateData(galleryItemId) {
    /*
      PUT ROUTE to /gallery/like/id
    */
    axios
      .put(`/gallery/like/${galleryItemId}`, (req, res) => {
        console.log('CLIENT - PUT inside updateData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - PUT - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log(' .catch CLIENT - PUT - got an error ', error);
      });
  } // end updateData

  function showDesc(galleryItemId, showDesc) {
    /*
      PUT ROUTE TO /gallery/show-desc/id
    */
    axios
      .put(
        `/gallery/show-desc/${galleryItemId}`,
        { show_desc: showDesc },
        (req, res) => {
          console.log('CLIENT - PUT inside showDesc() ');
        }
      )
      .then((response) => {
        console.log(' .then CLIENT - PUT - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log(' .catch CLIENT - PUT - got an error ', error);
      });
  }

  function deleteData(galleryItemId) {
    /*
      DELETE ROUTE to /gallery/id

      swal({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover these tasks',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      $.ajax({
        url: `/tasks/delete/all`,
        method: 'DELETE',
      })
        .then(function (response) {
          console.log('CLIENT - DELETE - a response occurred', response);
          swal('Poof! Your tasks have been deleted', {
            icon: 'success',
          });
          getTasks();
        })
        .catch(function (error) {
          console.log('CLIENT - DELETE - an error occurred', error);
        });
    } else {
      swal('Your to-do-list is safe!');
    }
  });
    */
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this image',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/gallery/${galleryItemId}`, (req, res) => {
            console.log('CLIENT - DELETE inside deleteData() ');
          })
          .then((response) => {
            console.log(' .then CLIENT - DELETE - got a response', response);
            getData();
          })
          .catch((error) => {
            console.log(' .catch CLIENT - DELETE - got an error ', error);
          });
      }
    });
  } // end deleteData

  return (
    <div className="App">
      <Header />
      <GalleryForm addData={addData} />

      <GalleryList
        galleryList={galleryList}
        updateData={updateData}
        deleteData={deleteData}
        showDesc={showDesc}
      />
    </div>
  ); // end return
}

export default App;
