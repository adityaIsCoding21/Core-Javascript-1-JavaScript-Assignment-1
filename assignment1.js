// Question 1

const marks = 90;
if(marks>=90){
    console.log("Grade A")
}
else if(marks >= 70 && marks<90){
    console.log("GRade B")
}
else if(marks>=50 && marks <70){
    console.log("Grade C");
}
else{
    console.log("Grade F");
}

// Question 2

let number1 = 10
let number2 = 20

for(let i = number1 ; i<=number2;i++){
    console.log(i)
}


// Question 3

let num =10

num>0?console.log("Postive"):num<0?console.log("Negative"):console.log("Zero");



// Question 4

/**
 
In JavaScript, the comma operator allows you to evaluate multiple expressions, separated by commas, within a single statement. It evaluates each expression from left to right and returns the value of the last expression.
 */

// Example 
for (var i = 0, j = 10; i < j; i++, j--) {
    console.log("i:", i, "j:", j);
  }
  

// Question 5

let username = "admin"
let password = "12345"

if(username === "admin " && password ==="12345"){
    console.log("Login successful");
}
else{
    console.log("Invalid Credentials");
}


// Question 6

const paymentMethod = undefined;

switch (paymentMethod) {
    case "credit":
        console.log("Processing fee of credit : 2%");
        
        break;

    case "debit" :
        console.log("Processing fee of credit : 1.5%"); 
        
    case "paypal" :
        console.log("Processing fee of credit : 3%");    

    default:
        console.log("Enter the correct Method");
        break;
}

// Question 7


let temp = 35

let result = temp>30?"Hot":"Moderate"

console.log(result);


// Question 8

let number = 20
let sum = 0
let indx = 1

do {
   sum = sum+indx
   indx++

} while (indx<=number);

console.log(sum);





