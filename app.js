//+,-,*,/,% Arithmatic operator

//Answer #1- 1. Return the Sum of Two Numbers -
//Create a function that takes two numbers as arguments and returns their sum.

//let FirstNumber = 12;
//let SecondNumber = 20;
//let sum = FirstNumber + SecondNumber;
//console.log(sum);

const sum=(n1,n2)=>{
return n1+n2
}
console.log(sum(2,3));

// Answer #2- ## 2. ****Convert Minutes into Seconds****
//Write a function that takes an integer `minutes`
 // and converts it to seconds.

const sec= min =>{
    return min * 60
}
console.log("convert min to sec=", sec (4));

//## 3. ****Return the Next Number from the Integer Passed****
//Create a function that takes a number as an argument, increments the number by +1, and returns the result

const int = i =>{
    return ++i;
}
let i = 5;
console.log("Increment the number", ++i);

//## 4. ****Area of a Triangle****
//Write a function that takes the base and height of a triangle and `return` its area.


const area = (base, height)=>{
    return (base*height)/2
}
console.log("Area of a Triangle", area (2,3));

//## 5. ****Return the First Element in an Array****
//Create a function that takes an array containing only numbers and `return` the first element.

const array = firstvalue =>{
    return firstvalue [0];
}
let firstvalue = [1,2,3,4,5,6]
console.log ("Return the First Element in an Array", array (firstvalue))


// ## 6. ****Convert Age to Days****
//Create a function that takes the age in years and returns the age in days.

//function day (age){
  //  return age *365
//}
const day= Age =>{
    return Age *365
}
console.log ("Convert Age to Days", day(1));
console.log ("Convert Age to Days", day(2));

//## 7. ****Power Calculator****
//Create a function that takes `voltage` and `current` and returns the calculated **power**

const Power = (Voltage, Current)=>{
    return (Voltage*Current)
}
console.log("Power Calculator", Power (2,3));


// ## 8. ****Maximum Edge of a Triangle****
//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.


const triangleThirdedge = (side1, side2)=>{
    return (side1 + side2) - 1
}
console.log("Maximum Edge of a Triangle", triangleThirdedge(8,10));

//9. Return the Remainder from Two Numbers

const Remainder = (firstParameter, secondParameter )=>{
    return (firstParameter % secondParameter)
}
console.log("Remainder from Two Numbers", Remainder (1,3));
console.log("Remainder from Two Numbers", Remainder (-9,45));

//## 10. ****Return Something to Me!****
// Write a function that returns the string `"something"` joined with a space `" "`and the given argument `a`

const string = a =>{
    return "something"+" " +a
}
let a = "is better than nothing";
let arg = "something"+" " +a;
console.log (string(a));


// 11. Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do

function squared(c){
    return c * c;
}

// ## 12. ****Is the Number Less than or Equal to Zero?****

//Create a function that takes a number as its only argument and returns `true`
// if it's less than or equal to zero, otherwise return `false`

function isless (a,b){
    return (a<=b);
}
isless(1,10);
console.log (5<=0);
console.log (-2<=0);


//## 13. ****Sum of Polygon Angles****
// Given an n-sided regular polygon `n` return the total **sum of internal angles** (in degrees).


function PolygonAngles (n) {
    return (n - 2)* 180
}
console.log("Sum of Polygon Angles", PolygonAngles(3));
console.log("Sum of Polygon Angles", PolygonAngles(6));


// ## 14. ****Basic Variable Assignment****
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string `name` with the string `"Coder"` and store it in a variable called `result` He needs your help to fix this code.


    function concatenateNameWithCoder(name) {
        const result = name + "Coder";
        return result;
    }
    const studentName = "Mushfique";
    const fullName = concatenateNameWithCoder(studentName);
    console.log(fullName); 
    
// ## 15. ****Less Than 100?****

// Given two numbers, return `true` if the sum of both numbers is less than 100. Otherwise`,` return `false`.

// Instructions: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.



function lessThan100(a, b) {
	return a + b >= 100 ? false : true
}

console.log (lessThan100(22,15))
console.log (lessThan100(83,34))

//lessThan100(22, 15) ➞ true
// 22 + 15 = 37

//lessThan100(83, 34) ➞ false
// 83 + 34 = 117