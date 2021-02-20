const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// ******** ROUTES at /gallery *********
// ******** DATABASE "gallery_items" *********

// GET Route
router.get('/', (req, res) => {
  console.log('SERVER - GET inside /gallery');

  // VARIABLES FOR QUERY
  const sqlQuery = 'SELECT * FROM "gallery_items" ORDER BY "id" ASC';

  pool
    .query(sqlQuery)
    .then((results) => {
      console.log('Retrieving results from "gallery_items"', results);
      res.send(results.rows); // Send back DB Response
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); // SERVER ERROR
    });
}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log('SERVER - PUT inside /gallery/like/id');
  console.log('req.params', req.params);

  // VARIABLES FOR QUERY
  const galleryItemId = req.params.id;
  const sqlQuery =
    'UPDATE "gallery_items" SET "likes" = "likes" + 1 WHERE "id"=$1';

  pool
    .query(sqlQuery, [galleryItemId])
    .then((result) => {
      console.log('Updated an item from the "gallery_items"', result);
      res.sendStatus(201); // UPDATE ITEM
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); // SERVER ERROR
    });
}); // end PUT

router.delete('/:id', (req, res) => {
  console.log('SERVER - DELETE inside /gallery/id');
  console.log('req.params.id', req.params.id);

  // VARIABLES FOR QUERY
  const galleryItemId = req.params.id;
  const sqlQuery = 'DELETE FROM "gallery_items" WHERE "id"=$1';

  pool
    .query(sqlQuery, [galleryItemId])
    .then((results) => {
      console.log('Deleting an item from "gallery_items"', results);
      res.sendStatus(200); // OK
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); // SERVER ERROR
    });
});

module.exports = router;
