const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const convert = require('xml-js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('datatdslkfjdlskjkl');
});

app.post('/api/hello', (req, res) => {
  let apiUrl = 'https://www.goodreads.com/search/index.xml';
  console.log(req.body.searchBy);
  let searchByTerm = req.body.searchBy ? req.body.searchBy : 'all';
  axios.get(apiUrl, {
    params: {
      key: process.env.API_KEY,
      q: req.body.term,
      searchField: searchByTerm
    }
  })
    .then(data => {
      let jsonResults = convert.xml2json(data.data, { compact: true, spaces: 2 });
      res.send(jsonResults);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
