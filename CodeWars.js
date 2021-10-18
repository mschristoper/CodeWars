//1kyu
//2kyu
//3kyu
//4kyu
//5kyu
//6kyu

//A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
//In this Kata, we will restrict ourselves to decimal (base 10).

//For example, take 153 (3 digits), which is narcisstic:
function narcissistic(value) {
  // Code me to return true or false
  let sum = 0;
  let valueNum = value.toString();
  for (let number of valueNum) {
    sum += Math.pow(Number(number), valueNum.length);
  }
  return sum === value;
}
narcissistic(153);

//1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

//   Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

//   This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

//   All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

//   What is considered Valid?
//   A string of braces is considered valid if all braces are matched with the correct brace.

const regex = /\(\)|\[\]|\{\}/;
const validBraces = (braces) =>
  regex.test(braces) ? validBraces(braces.replace(regex, "")) : "" === braces;
//   Examples
//   "(){}[]"   =>  True
//   "([{}])"   =>  True
//   "(}"       =>  False
//   "[(])"     =>  False
//   "[({})](]" =>  False

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  // character set capturing group with negative lookahead
  let regex = /([a-z])(?!.*\1)/gi;
  return string.match(regex).length === 26;
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:
function spinWords(string) {
  let stringToArry = string.split(" ");
  let arr = [];

  for (let x = 0; x < stringToArry.length; x++) {
    stringToArry[x].length >= 5
      ? arr.push(stringToArry[x].split("").reverse().join(""))
      : arr.push(stringToArry[x]);
  }
  return arr.join(" ");
}

spinWords("Hey fellow warriors");
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

//     Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
function countSmileys(arr) {
  let str = arr.join("");
  const validSmileys = /[:;][-~]?[)D]/g;
  let finalStr = str.match(validSmileys);

  return finalStr ? finalStr.length : 0;
}
countSmileys([":)", ";(", ";}", ":-D"]);
countSmileys([";D", ":-(", ":-)", ";~)"]);
countSmileys([";]", ":[", ";*", ":)", ";-D"]);

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//7kyu

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
  let sumOdd = 0;
  let sumEven = 0;
  let arr = str.split("");
  for (let x = 0; x < arr.length; x++) {
    Number(arr[x]) % 2 === 0
      ? (sumEven = sumEven + Number(arr[x]))
      : (sumOdd = sumOdd + Number(arr[x]));
  }
  if (sumEven > sumOdd) {
    return "Even is greater than Odd";
  } else if (sumOdd > sumEven) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}
evenOrOdd("112");

// Write a function that adds from two invocations.

// All inputs will be integers.

//Write you solution here.
function add(x) {
  function secondNumber(y) {
    return x + y;
  }
  return secondNumber;
}

add(3)(4);

add(3)(4); // 7
add(12)(20); // 32

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //You got this!
  let s = str.split("");
  s.pop();
  s.shift();
  return s.join("");
}
removeChar("eloquent");

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let x = ["a", "e", "o", "i", "u", "A", "E", "O", "U", "I"];

  for (let char of str) {
    if (x.includes(char)) {
      str = str.replace(char, "");
    }
  }
  return str;
}

disemvowel("This website is for losers LOL!");

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let newString = s.split(" ");
  let minNumber = 100;
  for (let x = 0; x < newString.length; x++) {
    if (newString[x].length < minNumber) {
      minNumber = newString[x].length;
    }
  }
  return minNumber;
}

findShort("bitcoin take over the world maybe who knows perhaps");
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
  let str = "";
  num = num + "";
  for (let char of num) {
    str = str + Number(char) ** 2;
  }
  return Number(str);
}

squareDigits(2112);

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)
function sumCubes(n) {
  let str = 0;
  for (let x = 1; x <= n; x++) {
    str = str + x ** 3;
  }
  return str;
}

sumCubes(2);
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
function rowSumOddNumbers(n) {
  let sum = n ** 3;
  return sum;
}
rowSumOddNumbers(1);
//assert.strictEqual(rowSumOddNumbers(42), 74088);

//   You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//   Complete the method which accepts such an array, and returns that single different number.

//   The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  const reducer = (previousValue, currentValue) => previousValue ^ currentValue;
  return numbers.reduce(reducer);
}

//8kyu

function multiply(a, b) {
  return a * b;
}

//Create a function that checks if a number n is divisible by two numbers x AND y.
//All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
//n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3

//   Given an array of integers, return a new array with each value doubled.

//   For example:

//   [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  let arr = [];
  for (let num of x) {
    arr.push(num * 2);
  }
  return arr;
}

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString();
//   }

//   Your task is to create a function that does four basic mathematical operations.

//   The function should take three arguments - operation(string/char), value1(number), value2(number).
//   The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else if (operation === "+") {
    return value1 + value2;
  }
}
//   Examples
//   basicOp('+', 4, 7)         // Output: 11
//   basicOp('-', 15, 18)       // Output: -3
//   basicOp('*', 5, 5)         // Output: 25
//   basicOp('/', 49, 7)        // Output: 7
