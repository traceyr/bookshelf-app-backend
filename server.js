const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const goodreadsRouter = require('./routes/goodreadsRoutes');
const myBooksRouter = require('./routes/myBooksRoutes');
require('dotenv').config();

const CONNECTION_URL = process.env.MONGO_URI;
const DATABASE_NAME = process.env.DB_NAME;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) {
    throw err;
  }
  console.log('Connected to ' + DATABASE_NAME);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/bookSearch', goodreadsRouter);
app.use('/api/myBooks', myBooksRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
