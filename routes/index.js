var express = require('express');
var router = express.Router();
/////////////IMAGE UPLOAD CODE////////////////////////////
///MADE WITH CODE MODIFIED FROM:
// https://www.bacancytechnology.com/blog/file-upload-using-multer-with-nodejs-and-express
var path = require('path');
const multer = require('multer');
const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: 'public/images', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(undefined, true)
}
}) 
/////////////////////////////////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
  res.send(req.file)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})
module.exports = router;
