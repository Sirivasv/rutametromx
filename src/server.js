const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

app.use('/javascript', express.static(__dirname + '/javascript'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/html/index.html');
});

app.listen(PORT);
console.log(`Running on PORT: ${PORT}`);