const request = require('request');

const forecast = (latitude, longitude, callback) => {    
    const url= `https://api.darksky.net/forecast/3526734330cc6f8f9be98fd9d20e3441/${latitude},${longitude}?units=si`
 
    request({ url, json: true }, (error, { body }) => {        
        if (error) {
            callback("Unable to connect to weather service!");
            
        } else if(body.error) {
            callback("Unable to find location");    
        } 
        else {        
            const data = body;
            const currently = data.currently;
            const daily = data.daily;
        
            callback(undefined, `${daily.data[0].summary}\nIt is currently ${currently.temperature}ºC degrees out. There is a ${currently.precipProbability}% chance of rain. `)
        }
    });
};


module.exports = forecast;