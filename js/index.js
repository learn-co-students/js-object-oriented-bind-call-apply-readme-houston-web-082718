// use this to copy code snippets or us your browser's console
function greet() {
  console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
  name: 'Bob',
  greet: greet
};
let sally = { name: 'Sally' };

person.greet();

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!

function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George')

greet.apply(sally, ['Terry', 'George']);

function greet(customerOne) {
  console.log(`Hi ${customerOne}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);

newGreet('Bob');

greet('Bob');

greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!

class Event {
  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  }
}

class User {
  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  }

  // matchInterests(event) {
  //   return event.keywords.some(function (word) {
  //     return this.interests.includes(word);
  //   }.bind(this));
  //   // console.log("'this' is defined: ", this)
  //   // return event.keywords.some(function (word) {
  //   //   console.log("'this' is now undefined: ", this);
  //   //   return this.interests.includes(word);
  //   // });
  // }
  matchInterests(event) {
    return event.keywords.some(word => this.interests.includes(word));
  }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
// Uncaught TypeError: Cannot read property 'interests' of undefined