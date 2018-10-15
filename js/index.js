// use this to copy code snippets or us your browser's console

// Bind:
// 1. matchInterests(event) {
//     return event.keywords.some(word => this.interests.includes(word));
// 2. }
// is the same as...
// 1. matchInterests(event) {
//     return event.keywords.some(function(word) {
//         this.interests.includes(word)
//     }.bind(this));
// 2. }


// 1. let sally = { name: 'Sally' };
// 2.  
// 3. function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// 4. }

// Call:
//     takes the value of ‘this’ as the first argument, followed by any other arguments
// 1. greet.call(sally, 'Terry', 'George');


// Apply:
//     takes 2 arguments, the value of ‘this’ and an array
// 1. greet.apply(sally, ['Terry', 'George']);