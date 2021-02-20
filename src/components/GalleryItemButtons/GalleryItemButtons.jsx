import GalleryList from '../GalleryList/GalleryList';

function GalleryItemButtons({ galleryItem, updateData, deleteData }) {
  return (
    <div>
      <h4>
        {galleryItem.likes > 0 ? (
          <span>Love this!</span>
        ) : (
          <span>Nobody likes this yet. :(</span>
        )}
      </h4>

      <p>Likes: {galleryItem.likes}</p>

      <button
        className="btn-likes"
        onClick={() => {
          updateData(galleryItem.id);
        }}
      >
        Love it!
      </button>
    </div>
  ); // end return
} // end GalleryItemButtons

export default GalleryItemButtons;
