const request = require('request');

request({ url: 'https://api.darksky.net/forecast/3526734330cc6f8f9be98fd9d20e3441/37.8267,-122.4233?units=si',
        json: true }, (error, response) => {
    
    if (error) {
        console.log('===============error=====================');
        console.log("Unable to get information from darksky-api");
        console.log('====================================');
        
    } else if(response.body.error) {
        console.log('================error====================');
        console.log(response.body.error);
        console.log('====================================');

    } 
    else {        
        const data = response.body;
        const currently = data.currently;
        const daily = data.daily;
    
        console.log('=================WEATHER===================');
        console.log(daily.data[0].summary);    
        console.log(`It is currently ${currently.temperature}ºC degrees out. There is a ${currently.precipProbability}% chance of rain. `);
        console.log('====================================');
    }
});


request({ url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/sergipe.json?access_token=pk.eyJ1IjoibGF0OTQiLCJhIjoiY2s4YWFhY2ZjMGZwbjNrcW5wNGo3ZDNxaCJ9.OVcrdM8IH3x86B9CRvkCxA&limit=1',
          json: true }, (error, response) => {

    if (error) {
        console.log('==============error======================');
        console.log("unable to get informations from mapbox");
        console.log('====================================');
        
    } else if (response.body.error) {
        console.log('=================error===================');
        console.log(response.body.error);
        console.log('====================================');
        
    } else if (response.body.features.length === 0) {
        console.log('===============bad request=====================');
        console.log("your search could not succeed, replace your search for something else");
        console.log('====================================');        
    } 
    else {        
        const data = response.body;
        const center = data.features[0].center;
    
    
        console.log('=================MAPBOX===================');
        console.log(`Coordinates-> lat: ${center[0]} long: ${center[1]}`);
        console.log('====================================');
    } 
    
});