'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const api = require('./Api');
const config = require('./Api/config');

const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   const allowedOrigins = [
//     'http://localhost:4200',
//     'http://localhost:8080',
//     'www.example3.com',
//   ];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }

//   res.header('Access-Control-Allow-Methods', 'GET, POST');

//   return next();
// });

app.use(bodyParser.json());

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}

app.use('/api', api);

app.use('/', express.static(path.join(__dirname, config.STATIC_DIR)));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end();
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoDB');

    app.listen(config.PORT, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
        );
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
