import './GalleryForm.css';
import '@fontsource/roboto';
import { useState } from 'react';

function GalleryForm({ addData }) {
  const [imagePath, setImagePath] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  return (
    <form
      className="frm-animal"
      onSubmit={() => {
        {
          addData(imagePath, imageDescription);
        }
      }}
    >
      <label>Image Path</label>
      <input
        onChange={(event) => {
          // console.log(imagePath);
          setImagePath(event.target.value);
        }}
      ></input>
      <label>Image Description</label>
      <input
        onChange={(event) => {
          // console.log(imageDescription);
          setImageDescription(event.target.value);
        }}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default GalleryForm;
