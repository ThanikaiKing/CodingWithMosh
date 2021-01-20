/* 
There are two variable types
Primitive/Value types
    string
    number
    boolean
    undefined
    null

Reference types
    Object
    Array
    Functions
*/

let object = {
    name: 'Thanikai',
    age: 24
};

//Accessing object values
object.name = 'Uthraa'; //Dot notation
object['age'] = '24'; // Bracket notation

let array = ['Thanikai', 24, 'Uthraa', 24];
// Value: [ "Thanikai", 24, "Uthraa", 24 ]

// An Array is an Object, So it's values and even it's type can be dynamically changed on the go (Powerful!)

array[2] = 'Vapaati';
array[3] = '22';
// Value: [ "Thanikai", 24, "Vapaati", "22" ]

function greet(name, age) {
    console.log("Hello " + name + "! Your age is " + age);
    return array;
}

console.log(greet(object.name, object.age));
// Hello Uthraa! Your age is 24
// Array(4) [ "Thanikai", 24, "Vapaati", "22" ] --> You can return anything

// Strict Equality operator (Both Type and Value should be same)
console.log(1 === 1); //true
console.log('1' === 1); //false

// Loose Equality operator
    // Converts the Operand on the right hand side to the type of left operand and checks for the value

console.log(1 == 1); //true
console.log('1' == 1); //true
console.log(true == 1); //true
console.log(true == 2); //false Other than 1 everything is false

// Logical operators with Non booleans (Process called Short-circuiting)
// Falsy (false)
    // undefined
    // null
    // false
    // 0
    // ''
    // NaN (Not a number - Special characters)

// Anything that is not a Falsy is a Truthy

// true && 1 && 'Thanikai' && 0 && 1
    // Ans: 0 (&& returns the first Falsy)

// 0 || false || undefined || 'Thanikai' || 1 || 0
    //Ans: 'Thanikai' (|| returns the first Truthy)

// Control flow    
//For-in loop
for(let key in object)
    console.log(key, object[key]);

for(let index in array)
    console.log(index, array[index]);

//For-of loop (Available only in ES6+ versions)
for(let element of array) //Used to iterate Arrays
    console.log(element);

//Exercise 1    
function fizzBuzz(input) {
    if(isNaN(input))
        return 'Not a Number';
    
    if((input % 3 == 0) && (input % 5 == 0))
        return 'fizzBuzz'

    if(input % 3 == 0)
        return 'fizz';
    if(input % 5 == 0)
        return 'buzz';
    return input;
}

//Exercise 2
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if(speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    let extraSpeedPoints = Math.floor((speed-speedLimit)/kmPerPoint);
    if(extraSpeedPoints > maxPoints) {
        console.log('License suspended');
    } else {
        console.log('Point: ' + extraSpeedPoints);
    }
}

// Learnings
    // Always use constants(ex:speedLimit) to specify numbers. Do not introduce magic numbers in the code and use it everywhere.
    // Reduce indentation whereever possible as indentation will reduce the readability

//Exercise 3
let truthyArray = [1,2,3,4, null, undefined, '', false, 0];
countTruthy(truthyArray);
function countTruthy(array) {
    let count = 0;
    for(let element of array) {
        if(element) count++;
    }
    console.log('Truthy count: ' + count);
}

// Other learnings from Exercises
    // A function must do only a single operation not multiple
    // Make sure to break it into muliple functions if it deviates fromt the function operation
    // Also if your code has nested loop logic
        // You can move the logic (The second loop) to a separate function, this will make your nested loop look better
        // That way your code will not look like it has nested loops