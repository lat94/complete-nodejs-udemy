console.log('Cliente side javascript file is loaded');




const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    console.log(location);

    fetch(`http://localhost:3000/weather?address=${encodeURIComponent(location)}`).then((response) => {    
        response.json().then(({ error, forecast }) => {
            if (error) {
                console.error(error);           
            } else {
                console.log(forecast);
            }    
        });    
    })
    

})