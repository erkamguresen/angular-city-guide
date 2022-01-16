const express = require('express');
const multer = require('multer');
const fs = require('fs');

const photoUploadRouter = express.Router();

const DIR = './uploads/';

var upload = multer({ dest: DIR });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

photoUploadRouter.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// photoUploadRouter.use(
//   multer({
//     dest: DIR,
//     rename: function (fieldname, filename) {
//       return filename + Date.now();
//     },
//     onFileUploadStart: function (file) {
//       console.log(file.originalname + ' is starting ...');
//     },
//     onFileUploadComplete: function (file) {
//       console.log(file.fieldname + ' uploaded to  ' + file.path);
//     },
//   })
// );

photoUploadRouter.use(multer({ storage: storage }).single('fileUpload'));

photoUploadRouter.use(function (req, res, next) {
  console.log('photo uploader route');
  console.log('header', req.headers);
  console.log('body', req.body);
  next();
});

photoUploadRouter.get('', function (req, res) {
  res.end('file catcher example');
});

photoUploadRouter.post('', function (req, res) {
  console.log('file', req.file);
  // upload(req, res, function (err) {
  //   if (err) {
  //     return res.end(err.toString());
  //   }

  res.end('File is uploaded');
  // });
});

module.exports = photoUploadRouter;
