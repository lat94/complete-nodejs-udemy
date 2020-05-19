const https = require('https');

const url= `https://api.darksky.net/forecast/3526734330cc6f8f9be98fd9d20e3441/40,-75?units=si`;

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
        console.log(chunk);
        
    }); 
    
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.error('An error', error);    
});

request.end();

