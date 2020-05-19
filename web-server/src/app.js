const express = require('express');
const app = express();

const PORT = 3000;

app.get('', (req, res) => {
    res.send('supp hommie!');
});

app.get('/help', (req, res) => {
    res.send('helping ya, hommie!');
});

app.get('/about', (req, res) => {
    res.send('this is all about ya, hommie!');
});

app.get('/weather', (req, res) => {
    res.send('weather is getting tough for ya, hommie!');
});


app.listen(PORT, () => {
    console.log(`Server is up! on port ${PORT}`);
});