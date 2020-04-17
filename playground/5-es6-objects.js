// Object property shorthand
const name = "Lucas";
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: "São Paulo"
};

console.log(user);

// Object destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
};

const {label, stock, rating = 5} = product

console.log(label);


const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
    
    
}

transaction("order", product);


