// task 1
var num1 = 5;
var num2 = 6;
var Addition = num1 + num2;
var Subtraction = num1 - num2;
var Multiplication = num1 * num2;
var Divison = num1 / num2;
var Exponentiation = num1 ** num2;
var Remainder = num1 % num2;
console.log(Addition, Subtraction, Multiplication, Divison, Exponentiation, Remainder)
// task 2
var Age = 18

if (Age >= 18)
{
    console.log("You are an adult.")
}
else{ console.log("You are a minor.")}

// task 3
var Pet = "Pug"
var PetAge = 6
const colors = ["Red", "Blue", "Green"];
console.log(Pet, PetAge, colors);

// task 4
const currentDate = new Date();
//console.log(currentDate);
console.log(currentDate.toLocaleString());
var squareRoot = Math.sqrt(num1);
console.log(squareRoot);

// task 5
let book = {
    title: "Harry Potter",
    published: 2005,
    keywords: ["wizards", "Witch", "Magic"],

    getInfo: function(){
        return (`${this.title} was Published in ${this.published}.`);
    }
};

console.log(book.getInfo());
book.keywords.push("Good vs Evil");
console.log("Updated Keywords:", book.keywords);
// task 6

const a = [1,2,3,4];

function sumArray(numbers){
    const total = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0 );
    return total;
}
const result = sumArray(a);
console.log("Sum of the array:", result);


// task 7

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
  
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
  }
const testString = "racecar"
const result2 = isPalindrome(testString);
console.log(`Is "${testString}" a palindrome? ${result2}`);
