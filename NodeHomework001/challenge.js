
// Challenge: Resize an image
// Write a program to download the JavaScript logo from 
// https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png, 
// and resize it using the gm module to the size 240x240. You might use the request 
// module to download the file. Hint: You will set the encoding option to 
// null for request. Example:

const gm = require('gm')
const request = require('request')
const fs = require('fs')


var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
}

request(options, function(error, response, imageData){
    
    var outFile = 'js.png'
    
    fs.writeFile(outFile, imageData, (error)=>{
        if (error) {
        console.error(error.message);
        return;
        }

        gm('js.png')
        .resize(240, 240, '!')
        .write('images/resizejs.png', function (err) {
        if (!err) console.log('done');
        });
        console.log('File Saved!');
    })
})

