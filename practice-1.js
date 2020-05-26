// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str){
    const reducer = (accumulator, currentValue) => currentValue + accumulator; 
    return str.split('').reduce(reducer);
}

// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
    const copy = str.split('').reverse().join('');
    return copy === str;
}

// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(number) {
    const copy = number.toString().split('').reverse().join('');
    return copy === number.toString();
}

// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const strArray = str.toLowerCase().split('');
    strArray.map((letter, i) => {
        if (i == 0 || strArray[i - 1] == ' ') {
            strArray[i] = strArray[i].toUpperCase();
        }
    });
    return strArray.join('');
}

// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    let dict = {};
    let maxCntChar = 0;
    let entries = [];

    str.split('').forEach((char) => {
        if(dict[char]) {
            dict[char]++;
        } else {
            dict[char] = 1;
        }
    });
    maxCntChar = Math.max(...Object.values(dict));
    entries = Object.keys(dict).filter((value) => dict[value] == maxCntChar);
    entries = entries.length == 1 ? entries[0] : entries;
    return entries;
}

// Write a program that prints all the numbers from 1 to N. For multiples of 3, instead of the number, 
// print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            return "FizzBuzz";
        } else if (i % 5 == 0) {
            
            return "Buzz";
        } else if (i % 3 == 0) {
            
            return "Fizz";
        } else return i;
    }
}

// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(str) {
    const regex = /[a-z]+/gi;
    let words = str.match(regex);
    let lengths = words.map(element => element.length);
    let maxCount = Math.max(...lengths);
    let longestWordsArray = words.filter(element => element.length === maxCount);
    return longestWordsArray;
}

let output = longestWord('Hello world how you doing?');
console.log(output);