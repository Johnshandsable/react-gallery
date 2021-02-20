import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateData, deleteData, showDesc }) {
  return (
    <div>
      <h2>Gallery List</h2>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
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
