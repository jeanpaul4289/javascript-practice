/*
A precedence rule is given as "P>E", which means that letter "P" is followed directly by the letter "E". Write a function, given an array of precedence rules, that finds the word represented by the given rules.

Note: Each represented word contains a set of unique characters, i.e. the word does not contain duplicate letters.

Examples:
findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
*/

function findWord(a){
    let len = a.length;
    let firstLetter = [];
    let secondLetter = [];
    let currentIndex = 0;
    let count = {};

    while(currentIndex < len){
        firstLetter.push(a[currentIndex].charAt(0));
        secondLetter.push(a[currentIndex].charAt(2));
        recordLetter(count, a[currentIndex].charAt(0), a[currentIndex].charAt(2));
        currentIndex++;
    }
    let first;
    console.log(count);
    for(let c in count) {
        if(count[c] == 1){
            if(firstLetter.indexOf(c) >= 0 ){
                first = c;
            }
        }
    }

    let result = first;
    currentIndex = firstLetter.indexOf(first);

    let times = 0;
    while(times < len){
        result += secondLetter[currentIndex];
        currentIndex = firstLetter.indexOf(secondLetter[currentIndex]);
        times++;
    }
    console.log(result);
}

function recordLetter(count, letter1, letter2) {
    count[letter1] = count[letter1] ? count[letter1] + 1 : 1;
    count[letter2] = count[letter2] ? count[letter2] + 1 : 1;
}
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND

/*
In addition (arithmetic operation), a carry refers to a digit that is transferred from one column to the adjacent column on the left when the result of the addition cannot be represented by a single digit. For example:

  55
+ 29
----
  84

In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried to the column on the left and added to the result of 5 + 2.

Write a function that given two numbers returns the total count of carry operations performed while adding them.

Example:
numberOfCarryOperations(65, 55) // 2
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry opera
*/

function numberOfCarryOperations(a, b) {
    let charA = a.toString();
    let charB = b.toString();

    let lastA, lastB;

    let carryCount=0;
    let carry = 0;

    while(charA.substr(charA.length - 1) || charB.substr(charB.length -1)){
        lastA = charA.substr(charA.length -1);
        lastB = charB.substr(charB.length -1);

        if(Number(lastA) + Number(lastB) + carry >= 10){
            carryCount++;
            carry = 1;
        } else {
            carry = 0;
        }
        charA = charA.substr(0, charA.length -1);
        charB = charB.substr(0, charB.length -1);
    }
    console.log(carryCount);
}
numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1