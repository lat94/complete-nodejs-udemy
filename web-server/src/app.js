// node modules
const path = require('path');
// npm modules
const express = require('express');
const hbs = require('hbs');


const PORT = 3000;
const app = express();

// define paths to express config
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// setup static directory to serve
const publicDirectoryPath = express.static(path.join(__dirname, '../public'));
app.use(publicDirectoryPath);

// routes
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
        title: 'Help',
        name: 'Lucas',
        helpfulText: 'Do you need some help?'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })        
    }

    res.send({
        forecast: 'it\'s really cold today',
        location: 'Araçatuba - SP',
        address: req.query.address
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });        
    } 

    res.send({
        address
    }); 
    
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Lucas',
        errorMessage: 'Page not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server is up! on port ${PORT}`);
});