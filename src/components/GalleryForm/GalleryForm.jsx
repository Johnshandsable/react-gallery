import './GalleryForm.css';
import '@fontsource/roboto';
import { useState } from 'react';

// ********* MATERIAL UI COMPONENTS *************
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

// ICONS
import AddIcon from '@material-ui/icons/Add';

function GalleryForm({ addData }) {
  const [imagePath, setImagePath] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  return (
    <div className="frm-animal">
      <FormControl
        fullWidth="true"
        variant="outlined"
        onSubmit={() => {
          {
            addData(imagePath, imageDescription);
          }
        }}
      >
        <InputLabel variant="outlined">Image Path</InputLabel>
        <Input
          onChange={(event) => {
            // console.log(imagePath);
            setImagePath(event.target.value);
          }}
        ></Input>
        <InputLabel variant="outlined">Image Description</InputLabel>
        <Input
          onChange={(event) => {
            // console.log(imageDescription);
            setImageDescription(event.target.value);
          }}
        ></Input>
        <Button variant="contained" color="primary" endIcon={<AddIcon />}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
}

export default GalleryForm;
