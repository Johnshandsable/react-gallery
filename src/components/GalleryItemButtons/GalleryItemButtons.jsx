import GalleryList from "../GalleryList/GalleryList";

function GalleryItemButtons(
  {galleryItem, 
   updateData, 
   deleteData}) {

  return (
    <div>

      <h4>
        {galleryItem.likes > 0 
          ? <span>
            Love this!
          </span> 
          : <span>
            Nobody likes this yet. :(
          </span> }
        </h4>

        <button 
          className="btn-likes" 
          id={galleryItem.id} 
          likes={galleryItem.likes}
          onClick={() => {updateData(galleryItem.id)}}>
          Love it!
        </button>
      </div>

    )
}

export default GalleryItemButtons;