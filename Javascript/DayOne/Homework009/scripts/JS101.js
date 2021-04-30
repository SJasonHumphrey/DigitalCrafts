
// Hello, you!
// Write a function hello which given a name, says hello to the name. Use the following template:


function hello(name) { 
    return `Hello there, ${name} !`;
}
var result = hello('Mustache');

console.log(result);

// Hello, you! Part 2
// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise 
// it behaves the same as previously.

function hello(name) { 
    if (name){
    return `Hello there, ${name} !`;
}   else {
    return 'Hello World!';
}
}
var result = hello('Mustache');

console.log(result);

// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) 
// a new string: (name)'s favorite subject in school is (subject).

function madLib (name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`
}

var result = madLib('Anushka', 'art');

console.log(result);

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of 
// service (one of good, fair and poor) and returns the dollar amount for the tip. 
// Based on:
// good -> 20%

// fair -> 15%

// bad -> 10%

function tipAmount(bill, service){
    switch(service){

        case'good':
        var tip = bill * .2;
        tipAmt = tip.toFixed(2);
        console.log(`Tip Amount: ${tipAmt}`);
        break;
        
        case'fair':
        var tip = bill * .15;
        tipAmt = tip.toFixed(2)
        console.log(`Tip Amount: ${tipAmt}`);
        break;

        case'poor':
        var tip = bill * .10;
        tipAmt = tip.toFixed(2)
        console.log(`Tip Amount: ${tipAmt}`);
        break;

        default:
            console.log('That value is unknown please re-enter')
    }    
}
tipAmount(100,'good')

// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns 
// the total as the tip amount plus the bill amount. This function may make use of tipAmount as a 
// sub-task.

function totalAmount(bill, service){
    switch(service){

        case'good':
        var tip = bill * .2;
        var total = bill + tip;
        totalAmt = total.toFixed(2)
        console.log(`Total Amount: ${totalAmt}`);
        break;
        
        case'fair':
        var tip = bill * .15;
        var total = bill + tip;
        totalAmt = total.toFixed(2)
        console.log(`Total Amount: ${totalAmt}`);
        break;

        case'poor':
        var tip = bill * .10;
        var total = bill + tip;
        totalAmt = total.toFixed(2)
        console.log(`Total Amount: ${totalAmt}`);
        break;

        default:
            console.log('That value is unknown please re-enter')
    }    
}
totalAmount(100,'fair')



function splitAmount(bill, service, people){
    switch(service){

        case'good':
        var tip = bill * .2;
        var total = (bill + tip) / people;
        splitAmt = total.toFixed(2)
        console.log(`Amount per person: ${splitAmt}`);
        break;
        
        case'fair':
        var tip = bill * .15;
        var total = bill + tip;
        splitAmt = total.toFixed(2)
        console.log(`Amount per person: ${splitAmt}`);
        break;

        case'poor':
        var tip = bill * .10;
        var total = bill + tip;
        splitAmt = total.toFixed(2)
        console.log(`Amount per person: ${splitAmt}`);
        break;

        default:
            console.log('That value is unknown please re-enter')
    }    
}
splitAmount(100,'good', 3)