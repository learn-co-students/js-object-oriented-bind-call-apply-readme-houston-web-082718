// bind needs a function or variable defind the values of the "this" as the first argument
// and the second argument is the list of values for all non-this variables in order



//----> 'this' example
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet(); // my name is Bob, hi!



//----> 'call' and 'apply' example
let sally = { name: 'Sally' };

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!



//----> more complex greet() function
let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

greet.apply(sally, ['Terry', 'George'])
// Hi Terry and George, my name is Sally!



//----> 'bind' example
let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is !
