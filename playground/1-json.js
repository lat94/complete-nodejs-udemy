const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json');
const parsedFile = JSON.parse(dataBuffer);

parsedFile.name = 'Lucas';
parsedFile.age = 26;


const newJSON = JSON.stringify(parsedFile);

fs.writeFileSync('1-json.json', newJSON);

