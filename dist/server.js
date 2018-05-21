const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

app.use('/jscript', express.static(__dirname + '/jscript'));

app.get('/', (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT);
console.log(`Running on PORT: ${PORT}`);