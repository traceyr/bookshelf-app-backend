const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const goodreadsRouter = require('./routes/goodreadsRoutes');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/bookSearch', goodreadsRouter);
app.listen(port, () => console.log(`Listening on port ${port}`));
