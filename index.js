var age='I am 15 years old';
alert(age)


if (localStorage.getItem("visitCount")) {
    var visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
} else {
    var visitCount = 1;
}
localStorage.setItem("visitCount", visitCount);
var message = "You have visited this site " + visitCount + " times.";
alert(message);


var brithyear='My brithyear is 1990<br>Data type of my declared variable is number ';
document.write(brithyear)



var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
document.write(message);



//Assignment 4
 
var variable1, variable2, variable3;

5 legal variable name:
userName
user age 
Total items 
$price 
camelCase variable

And 5 illegal variable name:
1st place (start with a number)
my-variable (contains a hyphen, not allowed in variable names)
var (conflicts with a reserved keyword)
function (conflicts with a reserved keyword)
illegal space (contains a space, not allowed in variable names) */

document.write("<h1>Rules for naming JS variable</h1>");
document. write("variable names can only contain letters, numbers, underscores and dollar sigins. for example$ my_ 1st variable<br>");
document.write("Variable must begin a letter underscore or dollar sigin. For example $name, _name or name<br>");
document.write("Variable name are case  sensitive<br>");
document.write("Variable name should be JS keyboards");



//assigment 5



var num1=3
var num2=5
var sum=num1+num2
console.log(sum)
document.write("Sum of 3and5 is 8")

var num1=3
var num2=5
var sub=num1-num2
console.log(sub)
document.write("sub of 3 and 5 is -2")

var num1=3
var num2=5
var mul=num1*num2
console.log(mul)
document.write("mul of 3 and 5 is 15")

var num1=3
var num2=5
var div=num1/num2
console.log(div)
document.write("div of 3and 5 is 0.6")

a.declare a variable.
var my variable.

b. Show the value of variable in your browser .
document.write("value after variable declaration is:"+ myvariable+<br>);

c. Initialize the variable with some number.
myvariable=5;

d. Show the value of variable.
 document.write("Initial value: " + myVariable + "<br>");

 e. Increment the variable.
 myVariable++;

 f. Show the value of variable.
 document.write("Value after increment is: " + myVariable + "<br>");

 g. Add 7 to the variable.
 myVariable += 7;

 h. Show the value of variable.
 document.write("Value after addition is: " + myVariable + "<br>");

 i. Decrement the variable.
 myVariable--;

 j. Show the value of variable.
 document.write("Value after decrement is: " + myVariable + "<br>");
 
k. Show the remainder after dividing the variable's value by 3.
 var remainder = myVariable%3;
 
 l. Output the remainder.
 document.write("The remainder is: " + remainder + "<br>");*/

// cost of one movie ticket
 var ticketprice=600;

// number of ticket
 var numberofticket=5

 
// Calculate the total cost
var totalCost = ticketPrice * numberOfTickets;

// Example output
var output = "Cost of one movie ticket: " + ticketPrice + " PKR<br>";
output += "number of tickets: " + numberOfTickets + "<br>";
output += "Total cost for " + numberOfTickets + " tickets: " + totalCost + " PKR";

document.write(output);


// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Store a Fahrenheit temperature into a variable.
var fahrenheitTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


 // Store prices and quantities in variables
 var priceItem1 = 650;
 var priceItem2 = 100;
 var quantityItem1 = 3;
 var quantityItem2 = 7;
 var shippingCharges = 100;

 // Calculate total costs
 var totalItem1 = priceItem1 * quantityItem1;
 var totalItem2 = priceItem2 * quantityItem2;
 var subtotal = totalItem1 + totalItem2;
 var totalCost = subtotal + shippingCharges;

 // Display the receipt
 document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
 document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
 document.write("<p>Total cost of Item 1: $" + totalItem1 + "</p>");
 document.write("<br>");
 document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
 document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
 document.write("<p>Total cost of Item 2: $" + totalItem2 + "</p>");
 document.write("<br>");
 document.write("<p>Subtotal: $" + subtotal + "</p>");
 document.write("<p>Shipping charges: $" + shippingCharges + "</p>");
 document.write("<h3>Total cost: $" + totalCost + "</h3>");




   // Store total marks and marks obtained in variables
   var totalMarks = 980;
   var marksObtained = 804;

   // Calculate the percentage
   var percentage = (marksObtained / totalMarks) * 100;

   // Display the result
   document.write("<p>Total Marks: " + totalMarks + "</p>");
   document.write("<p>Marks Obtained: " + marksObtained + "</p>");
   document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");


   const usDollars = 10;
   const saudiRiyals = 25;
   
   const usdToPkrRate = 104.80;
   const sarToPkrRate = 28;
   
   const totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
   
   document.write("Total amount in Pakistani Rupees:", totalPkr +"<br>");

   
   let number = 20;

   let result = ((number + 5) * 10) / 2;
   
   document.write("Final result:", result + "<br>");

   let currentYear = new Date().getFullYear(); // Get the current year
let birthYear = 1990; // Replace this with the actual birth year

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write(`They are either ${age1} or ${age2} years old.+ "<br>"`);



let radius = 5; // Replace this with the actual radius of the circle

let circumference = 2 * Math.PI * radius;

document.write("The circumference is " + circumference +"<br");*/</br>