import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// *********** IMPORT COMPONENTS ***************
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

// *********** MATERIAL UI COMPONENTS ***************
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'black',
    padding: '0 30px',
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

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
    */
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
  } // end deleteData

  return (
    <div className="App">
      <Header />
      <GalleryList
        galleryList={galleryList}
        updateData={updateData}
        deleteData={deleteData}
        showDesc={showDesc}
      />
      <GalleryForm addData={addData} />
      <Container maxWidth="md">
        <Typography variant="h4">Learn how to use Material UI</Typography>
      </Container>
    </div>
  ); // end return
}

export default App;
