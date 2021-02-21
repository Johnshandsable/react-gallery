import '@fontsource/roboto';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateData, deleteData, showDesc }) {
  return (
    <div>
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
    </div>
  ); // end return
} // end GalleryList

export default GalleryList;
