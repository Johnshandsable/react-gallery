import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
  console.log('GalleryList() ');

  for (const galleryItem of galleryList) {
    console.log(galleryItem.path, galleryItem.id);
  }

  return (
          <div>
            <h2>Gallery List</h2>
            {galleryList.map(galleryItem => {
              return (
                <GalleryItem 
                galleryItem={galleryItem}/>  
              ) // end inner return 

            })}
          </div>
  ) // end return 
} // end GalleryList

export default GalleryList;