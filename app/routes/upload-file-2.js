module.exports = app => {
  const multer = require('multer');
  
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, 'uploads/');
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, file.fieldname + '-' + Date.now());
  //   }
  // });
  
  // const upload = multer({ storage: storage });
  
   //! Use of Multer
   const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/uploads/users_upload_files/'); // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
  });
  
  
  // app.post('/test/two-file-and-text-input-multer-sharp-sequelize', upload.array('files', 2), (req, res) => {
  //   console.log('upload-file-2.js')
  //   console.log('Text 1: ', req.body.text1);
  //   console.log('Text 2: ', req.body.text2);
  
  //   req.files.forEach((file) => {
  //     console.log(file.fieldname + ': ', file.path);
  //   });
  
  //   res.send('Form data received and files uploaded!');
  // });
  

  
};



