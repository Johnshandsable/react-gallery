import '@fontsource/roboto';
import GalleryItem from '../GalleryItem/GalleryItem';

// ********* MATERIAL UI COMPONENTS *************
import Container from '@material-ui/core/Container';

function GalleryList({ galleryList, updateData, deleteData, showDesc }) {
  return (
    <Container maxWidth="lg">
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            updateData={updateData}
            deleteData={deleteData}
            showDesc={showDesc}
          />
        ); // end inner return
      })}
    </Container>
  ); // end return
} // end GalleryList

export default GalleryList;
