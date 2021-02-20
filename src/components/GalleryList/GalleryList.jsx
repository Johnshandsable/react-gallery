import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(
  {galleryList,
  galleryItemLikes, 
  setGalleryItemLikes}) {
    console.log('GalleryList() ');

    return (
            <div>
              <h2>Gallery List</h2>
              {galleryList.map(galleryItem => {
                return (
                  <GalleryItem 
                  galleryItem={galleryItem}
                  galleryItemLikes={galleryItemLikes}
                  setGalleryItemLikes={setGalleryItemLikes}/>  
                ) // end inner return 

              })}
            </div>
    ) // end return 
} // end GalleryList

export default GalleryList;