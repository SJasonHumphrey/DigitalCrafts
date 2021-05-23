const express = require('express');

const app = express();

let port = 3000;

// 1. Hello World
// Make an express program that will display "Hello, world!" 
// at the root URL: /

app.get('/', (request, response)=>{

    response.send('<h1>Hello World!</h1>')
});

// 2. Routes
// Add to your program the following pages:

// "Meow" at the URL /cats "Woof" at the URL /dogs "Living together" 
// at the URL /cats_and_dogs

app.get('/cats?', (request, response)=>{
    
    response.send('<h1>Cats</h1><h2>Meow</h2>');
});

app.get('/dogs?', (request, response)=>{
    
    response.send('<h1>Dogs</h1><h2>Woof!</h2>');
});

app.get('/cats_and_dogs', (request, response)=>{
    
    response.send('<h1>Cats & Dogs</h1><h2>Living Together</h2>');
});

// 3. Route Parameters
// Adding to the same program, say a greeting to the user, given 
// that the user's name is encoded inside the URL. For example, if you 
// go to the URL

// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc..

app.get('/greet/:name', (request, response)=>{

    let fName = request.params.name;

    response.send(`<h1>Hello, ${fName} !<h1/>`);
});

// http://localhost:3000/hello1?name=Jason

// http://localhost:3000/hello1?name=Jim&age=39

// Adding to the same program, display the year you were born when you 
// report your age in a query parameter. For example, when you go to the 
// URL:/year?age=32 it will display You were born in 1985.

app.get('/hello1', (request, response) =>{

    var name = request.query.name || 'world';

    var age1 = request.query.age || 'Not Available:';

    var age2 = parseInt(age1);

    var year = 2021;

    var birthYear = year - age2;

    response.send('Hello ' + name + '! Born in the year: ' + birthYear);

});



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});