/*let fullName= "Mercy Nderitu";
const age= 22;
var enrolled= true;

console.log(fullName);
console.log(age);
console.log(enrolled);

const string= "5"
const */

//conditional Statements (if...else): Write an if...else if...else statement that evaluates a variable representing a movie ticket buyer's age. The code should output different pricing tiers: children under 5 get in free, youth aged 5 to 17 get a child discount, adults aged 18 to 64 pay full price, and seniors 65 and older get a senior discount.
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