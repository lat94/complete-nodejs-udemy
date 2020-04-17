const names = ["Lucas", "Marcos", "Ana", "Jubileisson"];

const shortNames = names.filter((name) => name.length <= 4);

const add = (n1, n2, callback) => {
    setTimeout(() => {
        const result = n1 + n2;
        callback(result);        
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(`The result is: ${sum}`);
});





