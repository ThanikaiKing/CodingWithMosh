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

//For-in loop
for(let key in object)
    console.log(key, object[key]);

for(let index in array)
    console.log(index, array[index]);

//For-of loop (Available only in ES6+ versions)
for(let element of array) //Used to iterate Arrays
    console.log(element);

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