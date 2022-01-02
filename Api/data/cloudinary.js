require('dotenv').config();

const cloudinary = require('cloudinary').v2;

console.log(cloudinary.config());

/*
 * cloudinary-core.js line 1168 is closed due to the error as follows:
 * 1167 // User agent example taken from Safari desktop:
 * 1168 // var useAgent = navigator && navigator.userAgent || '';
 */

// working
// cloudinary.api.resource(
//   'city-guide-app/clown-5663427_640',
//   function (error, result) {
//     console.log(result, error);
//   }
// );

//delete works
cloudinary.uploader.destroy(
  'city-guide-app/clown-5663427_640',
  { resource_type: 'image' },
  function (error, result) {
    console.log(result, error);
  }
);

// cloudinary.uploader
//   .upload('./Api/data/clown-5663427_640.jpg', {
//     resource_type: 'image',
//     public_id: 'clown-5663427_640',
//     tags: 'clown',
//     folder: 'city-guide-app',
//     public_id: 'clown-5663427_640',
//   })
//   .then((result) => {
//     console.log(result);
//     /**
//      *  example result
//      * {
//      *
//             asset_id: 'cc1e3bed32b2769a64c94f104464b593',
//             public_id: 'aqv4h4bugnnitzgaz08z',
//             version: 1641145078,
//             version_id: '9aadaeccac723c159b34b5f979ad064a',
//             signature: 'cd1b427a4f08236fa00673dadcf1ed00772416a7',
//             width: 640,
//             height: 427,
//             format: 'webp',
//             resource_type: 'image',
//             created_at: '2022-01-02T17:37:58Z',
//             tags: [],
//             pages: 1,
//             bytes: 40274,
//             type: 'upload',
//             etag: 'dfcd5dd634b73ebe7f7b37d490c89ddc',
//             placeholder: false,
//             url: 'http://res.cloudinary.com/dcujvwwtd/image/upload/v1641145078/aqv4h4bugnnitzgaz08z.webp',
//             secure_url: 'https://res.cloudinary.com/dcujvwwtd/image/upload/v1641145078/aqv4h4bugnnitzgaz08z.webp',
//             original_filename: 'clown-5663427_640',
//             original_extension: 'jpg',
//             api_key: '**'
//         }
//      */
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//working
// cloudinary.uploader.upload(
//   './Api/data/clown-5663427_640.jpg',
//   {
//     folder: 'city-guide-app',
//     public_id: 'clown-5663427_640',
//   },
//   function (error, result) {
//     console.log(result, error);
//   }
// );
