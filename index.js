const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/random-number', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.send(randomNumber.toString());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});