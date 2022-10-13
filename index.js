const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const app = express();

const hostname = 'localhost';
const port = 3500;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
