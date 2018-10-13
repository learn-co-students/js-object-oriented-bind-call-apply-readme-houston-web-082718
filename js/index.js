// use this to copy code snippets or us your browser's console
let sally = {
    name: 'Sally'
};

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);

let person = {
    name: 'Bob',
    greet: greet
};