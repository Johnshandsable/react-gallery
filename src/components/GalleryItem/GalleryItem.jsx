import './GalleryItem.css';
import GalleryItemButtons from '../GalleryItemButtons/GalleryItemButtons';

function GalleryItem({ galleryItem, updateData, deleteData, showDesc }) {
  /* 
  Expects 
  galleryItem
              id: unique key
              path: string
              description: string
              likes: integer
              show_desc: true/false
  */

  return (
    <div className="img-container">
      <h2>Gallery Item</h2>
      {galleryItem.show_desc ? (
        <img
          className="gallery-img"
          id={galleryItem.id}
          src={galleryItem.path}
          alt={galleryItem.description}
          onClick={() => {
            {
              showDesc(galleryItem.id, galleryItem.show_desc);
            }
          }}
        />
      ) : (
        <div
          className="gallery-desc"
          onClick={() => {
            showDesc(galleryItem.id, galleryItem.show_desc);
          }}
        >
          {galleryItem.description}
        </div>
      )}
      <GalleryItemButtons
        galleryItem={galleryItem}
        updateData={updateData}
        deleteData={deleteData}
      />
    </div>
  );
}

export default GalleryItem;
