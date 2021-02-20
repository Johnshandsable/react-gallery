import GalleryItemButtons from '../GalleryItemButtons/GalleryItemButtons';

function GalleryItem(
  {galleryItem, 
   galleryItemLikes,
   setGalleryItemLikes}) {
  console.log('GalleryItem() ');
  console.table(galleryItem);
  /* 
  galleryItem
              id:
              path: 
              description: 
              likes:
  */

  // TODO: Swap an image with description on click
  return (
    <div>
      <h2>Gallery Item</h2>
      <img id={galleryItem.id} 
      src={galleryItem.path} 
      alt={galleryItem.description}
      onClick={() => console.log('image clicked')}>
      </img>
      <GalleryItemButtons 
      galleryItem={galleryItem}
      galleryItemLikes={galleryItemLikes}
      setGalleryItemLikes={setGalleryItemLikes}/>
    </div>
  )
}

export default GalleryItem;