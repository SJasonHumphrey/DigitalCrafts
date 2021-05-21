// 4. Save a web page
// Write a program to save a web page. Prompt the user for a URL for the 
// web page he wants to save, and for the filename to save to. For example:

// $ node save_web_page.js
// URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
// Save to file: cover-book.html
// Saved to file cover-book.html
// As result cover-book.html should have the HTML source code from the 
// entered URL.

// Trigger an error by running the program with an invalid URL, ensure 
// the error is properly displayed. Trigger an erro by running the program 
// with an output file in a non-existent directory, such as
//  thisdirdoesntexist/output.txt, ensure that the error is 
//  properly displayed.

const scrape = require('website-scraper');
const prompt = require('prompt-sync')();

const  web = prompt('Website address: ');


let options = {
    urls: [`https://${web}`],
    directory: './website',
};

for(let i = 0; i < 1; i++){
scrape(options)
.then((result) => {
    console.log("Website succesfully downloaded");
}).catch((error) => {
    console.log("An error ocurred", error);
});
}