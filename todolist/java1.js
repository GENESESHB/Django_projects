const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Rename the file to a unique name
  },
});

const upload = multer({ storage });

// Serve HTML file with the upload form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('profileImage'), (req, res) => {
  const file = req.file; // Uploaded file details

  if (!file) {
    return res.status(400).send('Please upload a file.');
  }

  // Here, you can save the file path or other relevant information to your database
  // Update the user's profile with the file path or store it as needed

  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
