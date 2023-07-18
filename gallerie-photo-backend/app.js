const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../src/assets/images');
  },
  filename: function (req, file, cb) {
    const fileName = req.body.name;
    const fileExtension = path.extname(file.originalname);
    cb(null, fileName + fileExtension);
  },
});

const upload = multer({ storage }).single('image');

app.get('/images', (req, res) => {
  const directoryPath = '../src/assets/images';

  fs.readdir(directoryPath, (err, imageNames) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Failed to read directory' });
    }

    const images = imageNames.map((imageName, index) => ({
      id: `${index + 1}`,
      name: imageName.slice(0, imageName.lastIndexOf('.')),
      url: `assets/images/${imageName}`,
    }));

    res.json({ images });
  });
});

app.post('/images', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    const { id, name } = req.body;
    const url = `../src/assets/images/${req.file.filename}`;

    res.status(200).json({ message: 'File uploaded successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
