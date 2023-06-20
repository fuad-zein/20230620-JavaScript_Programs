/**
 * JS Functions | 6 ways
 * 1. Named Functions
 * 2. Anonymous Functions
 * 3. Arrow Functions
 * 4. Immediately Invoked Function Expressions (IIFE)
 * 5. Higher Order Functions
 * 6. Constructor Functions
 */

/**
 * 1. Named Functions = lacacy / traditional way
 */
function namedFunction() {
  console.log("Named Functions");
}
namedFunction();

/**
 * 2. Anonymous Functions =
 *  - without name, used as function expression or a arguments
 */
let greet = function (name) {
  console.log(`Hello ${name} 🙌`);
};
greet("Fuad"); // Hello Fuad

/**
 * 3. Arrow Functions =
 *  - introduced in ES6, shorter syntax & one-lined functions
 */
let say = () => console.log("Hello 👋");
say(); // Hello

/**
 * 4. IIFE Functions =
 *  - executed immediately after their creation.
 *  - used to create private scopes and avoid polluting the global namespace.
 */
(function () {
  let str = "Good luck... 😉";
  console.log(str);
})(); // Good luck... (Immediate Invoked)

/**
 * 5. Higher Order Functions =
 *  - function that take one or more functions as arguments or return a function.
 *  - eg: map(), filter(), reduce()
 */
let arrays = [10, 20, 30];
let newArrays = arrays.map((array) => array + 10);
console.log(newArrays); // [20, 30, 40]

/**
 * 6. Constructor Functions
 *  - used as blueprints for creating objects with similiar properties and methods.
 *  - they are invoked using the new keyword to create instance of objects.
 */
function Person(name, place) {
  this.name = name;
  this.place = place;
}

let user1 = new Person("Fuad", "Indonesia");

console.log(
  `Hello everyone my name is ${user1.name}, and i am from ${user1.place} 👋`
); // Hello everyone my name is Fuad, and i am from Indonesia
