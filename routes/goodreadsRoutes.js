'use strict';
const router = require('express').Router();
const { getAllBooks, getOneBook } = require('../controllers/goodreadsControllers');

router.post('/', async (req, res, next) => {
  try {
    console.log('here1')
    let searchByTerm = req.body.searchBy ? req.body.searchBy : 'all';
    let allBooks = await getAllBooks(searchByTerm, req.body.term);
    res.send(allBooks);
  } catch(e) {
    console.log(e);
  }

});

router.post('/:id', async (req, res, next) => {
  try {
    let oneBook = await getOneBook(req.body.id)
    res.send(oneBook);
  } catch(e) {
    console.log(e);
  }
});

module.exports = router;
