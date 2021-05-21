// 3. Read and write
// Write a program to prompt the user for two file names, the first file will be 
// the input and the second file will be the output. The program will read in 
// the contents of the input file, convert its text to all caps, and then write 
// the resulting contents to the output file

// Example:

// $ node cap_file_2.js
// Input file: file1.txt
// Output file: output.txt
// Wrote to file output.txt
// As a result, output.txt should now contain the text HELLO, I AM FILE 1.

const prompt = require('prompt-sync')();

const fileName1 = prompt('File Name 1?: ');

const fileName2 = prompt('File Name 2?: ');

const fs =  require('fs');

fs.readFile(fileName1, (error, buffer)=>{
    if(error){
        console.log('Danger! Danger! Will Robinson:', error.message);
        return
    }
    

fs.writeFile(fileName2, buffer, (error)=>{
    if (error) {
    console.log('Danger! Danger! Will Robinson:', error.message);
    return
    }
    console.log(`Wrote to ${fileName2}`)



fs.readFile(fileName2, (error, contents)=>{
    if(error){
        console.log('Danger! Danger! Will Robinson:', error.message);
        return
    }

    console.log(`As a result, output.txt should now contain the text:${contents}`);
    return
});
});
});
