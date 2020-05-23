// node modules
const path = require('path');
//
// npm modules
const express = require('express');

const PORT = 3000;
const app = express();
const publicDirectoryPath = express.static(path.join(__dirname, '../public'));


app.set('view engine', 'hbs');
app.use(publicDirectoryPath);

app.get('', (req, res) => {    
    res.render('index', {
        title: 'Weather',
        name: 'Lucas'
    });
});

app.get('/about', (req, res) => {    
    res.render('about', {
        title: 'About me',
        name: 'Lucas'
    });
});

app.get('/help', (req, res) => {    
    res.render('help', {
        title: 'Help me',
        name: 'Lucas'
    });
});

app.get('/weather', (req, res) => {
    res.send({forecast: 'it\'s really cold today', location: 'Araçatuba - SP'});
});


app.listen(PORT, () => {
    console.log(`Server is up! on port ${PORT}`);
});