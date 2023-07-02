const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
