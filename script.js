//Exercise 1: Variables and Data Types
const fullName = "Wisdom Njoroge"
let age = 19
var isEnrolled = true

console.log(fullName ,typeof fullName);
console.log(age ,typeof age);
console.log(isEnrolled ,typeof isEnrolled);

//Exercise 2: Operators and Type Coercion
const stringNum = "5";
const actualNum = 10;

const additionResult = stringNum + actualNum

const multiplicationResult = stringNum * actualNum

console.log( additionResult ,typeof "additionResult");
console.log(multiplicationResult ,typeof "multiplicationResult");

//Execise 3: conditional Statements (if...else)
let buyersAge= 5;

if (buyersAge<=5){
	console.log("Free")
}
else if (buyersAge >=5 && buyersAge<=17){
	console.log("Apply children's Discount!")

}
else if (buyersAge>=18 && buyersAge <=64){
	console.log("Full Price!")

}

