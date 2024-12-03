const express = require('express');

//Some Code Snippets in the file are missing and need to be added Find and write them here
// Load environment variables from .env file


const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    // Fetch Message from env file i.e. Hii There, The app is running on port 5001
    const message =  'No message found in .env file';
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});