const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ******** ROUTES at /gallery/show-desc *********
// ******** DATABASE "gallery_items" *********

// PUT Route
router.put('/:id', (req, res) => {
  console.log('SERVER - PUT inside /gallery/show-desc/id');

  // VARIABLES FOR QUERY
  const galleryItemId = req.params.id;
  const galleryItemShowDesc = req.body.show_desc;
  let sqlQuery = '';

  /* SETS EITHER FALSE OR TRUE DEPENDING ON WHAT IS PASSED FROM ONCLICK */
  if (galleryItemShowDesc == false) {
    sqlQuery = 'UPDATE "gallery_items" SET "show_desc"=TRUE WHERE "id"=$1';
  } else {
    sqlQuery = 'UPDATE "gallery_items" SET "show_desc"=FALSE WHERE "id"=$1';
  }

  pool
    .query(sqlQuery, [galleryItemId])
    .then((result) => {
      console.log('Updated show_desc from "gallery_items"', result);
      res.sendStatus(201); // UPDATE ITEM
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); // SERVER ERROR
    });
}); // end PUT

module.exports = router;
