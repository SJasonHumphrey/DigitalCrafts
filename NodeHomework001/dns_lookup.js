// 2. DNS lookup
// Write a program that prompts the user for a domain name, looks up the IP 
// address for the domain, and prints it out. Example:

// $ node dns_lookup.js
// Domain name: yahoo.com
// IP Address: 98.139.183.24

const dns = require('dns');

const prompt = require('prompt-sync')();

const webAddress = prompt('Web Address?: ');


dns.lookup(webAddress, (error, address) => {
    if(error){
        console.log(error.message);
        return
    }
    console.log(`Domain Name: ${webAddress}:`, address);
});




