const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const convert = require('xml-js');
const cors = require('cors');
const { getAllBooks, getOneBook } = require('./controllers/goodreadsControllers');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/bookSearch', async (req, res, next) => {
  try {
    console.log('here1')
    let searchByTerm = req.body.searchBy ? req.body.searchBy : 'all';
    let allBooks = await getAllBooks(searchByTerm, req.body.term);
    res.send(allBooks);
  } catch(e) {
    console.log(e);
  }

});

app.post('/api/book', async (req, res, next) => {
  try {
    let oneBook = await getOneBook(req.body.id)
    res.send(oneBook);
  } catch(e) {
    console.log(e);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
