
// Given a string and an array of string, make a function that return an array with the words that form an anagram from the given string.
function getAnagram(S, A){
    let sFixed = S.split('').sort().join('');
    let AFixed = A.filter(element => element.split('').sort().join('') == sFixed);
    console.log(sFixed, AFixed);
}

// Given two binary strings a and b, add them together and return the resulting string
function binaryStringAddition(a, b){
    let intA = parseInt(a, 2);
    let intB = parseInt(b, 2);
    let result = (intA + intB).toString(2);
    return result;
}

// Given two integer a, and b we would like to get the amount of carries that we perform in the addition of these two numbers.
function numberOfCarryOperations(a, b){
    let charA = a.toString();
    let charB = b.toString();
    let lastA, lastB;
    let carryCount = 0;
    let carry = 0;
    while(charA.substr(charA.length - 1) || charB.substr(charB.length - 1) ){
        lastA = charA.substr(charA.length - 1);
        lastB = charB.substr(charB.length - 1);
        if(Number(lastA) + Number(lastB) + carry > 9){
            carryCount++;
            carry = 1;
        } else {
            carry = 0;
        }
        charA = charA.substr(0, charA.length - 1);
        charB = charB.substr(0, charB.length - 1);
    }
    return carryCount;
}

// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.
function composeRange(array) {
    
    if(!array.length){
        return [];
    } else if (array.length == 1){
        return [array[0].toString()];
    } 
    let resultArray = [];
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) + 1 == Number(array[i + 1])) {
            if(result.length == 0){
                result += array[i];
            } else if (result.length > 0 && !result.includes("->")) {
                result += "->";
            }
        } else {
            result += (result.includes("->") || result == "") ? array[i] : "->" + array[i];
            resultArray.push(result);
            result = "";
        }
    }
    return resultArray;

}

/**
 * TODO: given a numer n, creates a function that return as string as a factor of prime numbers
 * example:
 * primeDecomposition(10) -> 2 * 5
 * primeDecomposition(20) -> 2 * 2 * 5
 */
function primeDecomposition(n) {
    let factors = "";
    let max_divisor = Math.sqrt(n);
    for (let i = 2; i <= max_divisor; i++) {
        if(isPrime(i)) {
            while (n % i == 0) {
                n = n / i;
                factors += i.toString();
                factors += (n == 1) ? "" : "*";
            }
        }
    }
    if (n != 1) {
        factors += n.toString();
    }
    return factors;
}
function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }
    return n > 1;
}

// const output = getAnagram('horse', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']);
// const output = binaryStringAddition('1001','110');
// const output = numberOfCarryOperations(123,456);
// const output = composeRange([-1,1,2,3,9]);
const output = primeDecomposition(100);
console.log(output);