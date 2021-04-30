
// Print Numbers
// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:

function printNumbers(num1, num2){
    
    for(num1; num1 <= num2; num1++) {
        console.log(num1)
    }
}  

printNumbers(1, 10);

// Bonus

function printNumbers2(num1, num2){
        while(num1 <= num2) {
        console.log(num1++);
        
    }   
    
}  

printNumbers2(1, 10);

// Print a Square
// Write a function printSquare which is given a size and prints a 
// square of that size using asterisks.

function printSquare(number){
    var line = '';
    var ast = '*';
    for(var i = 0; i < number; i++){
        line = line + ast;
        
    }
    for(var i = 0; i < number; i++){
        console.log(line)
    }
    
    
}

printSquare(5)


// Print a box
// Write function printBox which is given a width and height and prints a 
// hollow box of those given dimensions.

function printBox(width,height){
    var top = '';
    var middle = '';
    var ast = "*";
    var space = ' ';
    var bottom = '';

    for(var i = 0; i < width; i++){
        top = top + ast;
        bottom = bottom + ast;
    }

    for(var i = 0; i < width-2; i++){
        middle = middle + space;
    }

    console.log(top);

    for(var i = 0; i < height-2; i++){
        console.log(ast + middle + ast);
    }
    console.log(bottom);
}
printBox(5,5);

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a 
// border surrounding the text. The border has to stretch to the length of the text.

function printBanner(text){
    var lines = "";
    var char = "*";
    var space = " ";
    //creates top and bottom lines
    for(var i = 0; i < text.length + 4; i++){
        lines = lines + char;
    }
    //prints all to terminal
    console.log(lines);
    console.log(char + space + text + space + char);
    console.log(lines);
}
//function call
printBanner('Digital Crafts')

// Factor a Number
// Write a function factors which is given a number and returns an array 
// containing all its factors. What are factors?


function factors(number){
    newArray = [];
    for(var i = 0; i <= number ; i++){
        if( number % i == 0){
            newArray.push(i)
    }
    }
    return newArray;
}

var factorsOf = factors(750);
console.log(factorsOf)

// Caesar Cipher
// Write a function cipher which is given a string, an offset, and 
// returns the Caesar cipher of the string

function cipher(sentence,offset){
    sentence = sentence.toLowerCase();
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    sentenceEnc = '';
    for(var i = 0; i < sentence.length; i++){
        if(sentence[i].toLowerCase() != sentence[i].toUpperCase()){
            x = letters[(letters.indexOf(sentence[i]) + offset) % 26];
        }
        else{
            x = sentence[i];
        }
        sentenceEnc = sentenceEnc.concat(x);
    }
    return sentenceEnc;
}

var encrypt = cipher('Genius without education is like silver in the mine', 13);
console.log(encrypt)

// Caesar Cipher 2
// Write a function decipher which is given a string, an offset, 
// and returns the original message.
function decipher(sentence, offset){
    sentence = sentence.toLowerCase();
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    sentenceDe = '';
    for(var i = 0; i < sentence.length; i++){
        if(sentence[i].toLowerCase() != sentence[i].toUpperCase()){
            x = letters[(letters.indexOf(sentence[i]) - offset) % 26];
        }
        else{
            x = sentence[i];
        }
        sentenceDe = sentenceDe.concat(x);
    }  
    return sentenceDe;
}     

var decrypt = decipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', -13);
console.log(decrypt)

// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetSpeak(sentence){
    sentence = sentence.toUpperCase();
    for (var i = 0; i < sentence.length; i++){
        switch(sentence[i]){
            case("A"):
            sentence = sentence.replace("A", "4")
                break;
            case("E"):
            sentence = sentence.replace("E", "3")
                break;
            case("G"):
            sentence = sentence.replace("G", "6")
                break;
            case("I"):
            sentence = sentence.replace("I", "1")
                break;
            case("O"):
            sentence = sentence.replace("O", "0")
                break;
            case("S"):
            sentence = sentence.replace("S", "5")
                break;
            case("T"):
            sentence = sentence.replace("T", "7")
                break;
            default:
                break;
        }
    }
    return sentence;
}
leetCode = leetSpeak('How are you doing today?');
console.log(leetCode);

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// longLongVowels('Good');
// 'Goooood'
// longLongVowels('Cheese');
// 'Cheeeeese'
// longLongVowels('Man');
// 'Man'

function longVowels(sentence){
    sentence = sentence.toUpperCase();
    for(var i = 0; i < sentence.length; i++){
        switch(sentence[i]){
                case"E":
                sentence = sentence.replace("EE", "EEEEEE")
                break;
            case "O":
                sentence = sentence.replace("OO", "OOOOO")
                break;
            default:
                break;
        } return sentence;
    } 
} 

    var word = longVowels('meet');
    console.log(word);
    
// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns 
// the sum of the numbers.
    
    // sumNumbers([1, 4, 8]);
    // 13
    

function sumNumbers(numArray){
    var sum = 0;
    for(var i = 0; i < numArray.length;i++){
        sum = sum + numArray[i];
        }
        return sum;
    }
    sum = sumNumbers([19,7,2]);
    console.log(sum);
    
    // Write a function positiveNumbers which is given an array of numbers and returns a 
    // new array containing only the positive numbers within the given array.

    function positiveNumbs(array){
        var newArr = [];
        for(var i = 0; i < array.length; i++){
            if(array[i] >= 0){
                newArr.push(array[i]);
    
            }
        }
        return newArr
    }
    
    positive = positiveNumbs([27, -32, -4, 5, 20])
    console.log(positive);
