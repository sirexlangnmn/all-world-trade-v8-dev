const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const { Sequelize } = require('sequelize');

const app = express();
const upload = multer({ dest: 'uploads/' });

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Image = sequelize.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.BLOB('long'),
    allowNull: false
  }
});

app.post('/upload-image', upload.single('image'), async (req, res) => {
  const imageBuffer = await sharp(req.file.buffer)
    .toFormat('webp', { quality: 80 })
    .toBuffer();

  await Image.create({
    name: req.file.originalname,
    data: imageBuffer
  });

  res.send('Image uploaded, converted to WebP, and stored in the database');
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});
