import GalleryList from "../GalleryList/GalleryList";

function GalleryItemButtons(
  {galleryItem, 
   galleryItemLikes, 
   setGalleryItemLikes}) {
  console.log('GalleryItemButtons() ');

  function toggleDescription() {
    console.log('toggleDescription() ');
  }
  /*
{item.purchased 
            ? <p>Purchased</p> 
            : <ListItemButtons
                item={item}
                updateItemFromList={updateItemFromList}
                deleteItemFromList={deleteItemFromList}/>}
          </li>
  */

  return (

    <div>
      <h4>
        {galleryItem.likes > 0 
        ? <span>
          Love this!
          </span> 
        : <span>
          Nobody likes this yet. :(
        </span>
   }
      </h4>
      <button 
      className="btn-likes" 
      id={galleryItem.id} 
      likes={galleryItem.likes}
      onClick={() => setGalleryItemLikes(galleryItemLikes + 1)}>
        Love it!
      </button>
    </div>

  )
}

export default GalleryItemButtons;