// 1. Declaring a variable
// Declare a variable called "firstName" whose value is your first name Declare a variable called "lastName" whose value is your first name Declare a variable called "name" whose value is the concatenation of firstName and lastName

// Print name to the console

var firstName = 'Jason';

var lastName = 'Humphrey';

name = firstName + ' ' + lastName

console.log('Name:',name);

// 2. Declaring an integer
// Declare a variable called "a" with a value of 2

// Declare a variable called "b" with a value of 3

// Declare a variable x whose value is a + b

// Print x to the screen

var a = 10;

var b = 20;

var x = a + b;

console.log('x is:', x);

// 3. Mixed type
// Add the string "5" to x and print the result

// Print the number of characters in firstName

var five = '5';

console.log('five(string) + x = ', five + x);

console.log('firstname length:',firstName.length)

// 4. Fizz Buzz
// If else, fizz buzz

for (var i = 1; i <= 100; i ++) {
    if (i % 3 == 0){
        console.log('Fizz')
    }
    else if (i % 5 == 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}