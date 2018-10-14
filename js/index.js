// use this to copy code snippets or us your browser's console
function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: "Sally" };

let newGreet = greet.bind(sally);

greet(); // my name is , hi!

let person = {
  name: "Bob",
  greet: greet
};

person.greet(); // my name is Bob, hi!
