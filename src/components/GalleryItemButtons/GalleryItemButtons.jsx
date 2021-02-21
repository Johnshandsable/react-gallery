// STYLES
import './GalleryItemButtons.css';
import '@fontsource/roboto';

// ********* MATERIAL UI COMPONENTS *************
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

// ICONS
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function GalleryItemButtons({ galleryItem, updateData, deleteData }) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        {galleryItem.likes > 0 ? (
          <Box color="text.primary" component="span" m={1}>
            {' '}
            Love this!{' '}
          </Box>
        ) : (
          <Box color="text.primary" component="span" m={1}>
            {' '}
            Nobody likes this yet. :({' '}
          </Box>
        )}
      </Typography>

      <Typography variant="subtitle1">Likes: {galleryItem.likes}</Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ThumbUpAltIcon />}
          onClick={() => {
            updateData(galleryItem.id);
          }}
        >
          Like
        </Button>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<DeleteForeverIcon />}
          onClick={() => {
            deleteData(galleryItem.id);
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default GalleryItemButtons;
