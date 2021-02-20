function GalleryItem({galleryItem}) {
  console.log('GalleryItem() ');
  console.table(galleryItem);
  /* 
  galleryItem
              id:
              path: 
              description: 
              likes:
  */
  return (
    <div>
      <h2>Gallery Item</h2>
      <img src={galleryItem.path} alt={galleryItem.description}></img>
    </div>
  )
}

export default GalleryItem;