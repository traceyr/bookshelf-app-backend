const axios = require('axios');
const convert = require('xml-js');


const getAllBooks = async (searchBy, searchTerm) => {
  let apiUrl = 'https://www.goodreads.com/search/index.xml';
  let results = await axios.get(apiUrl, {
    params: {
      key: process.env.API_KEY,
      q: searchTerm,
      searchField: searchBy
    }
  })
  let jsonResults = convert.xml2json(results.data, { compact: true, spaces: 2 });
  return jsonResults;
}

const getOneBook = async(id) => {
  let apiUrl = 'https://www.goodreads.com/book/show';
  let results = await axios.get(apiUrl, {
    params: {
      key: process.env.API_KEY,
      format: 'xml',
      id: id
    }
  })
  let jsonResults = convert.xml2json(results.data, { compact: true, spaces: 2 });
  return jsonResults;
}

module.exports.getAllBooks = getAllBooks;
module.exports.getOneBook = getOneBook;
