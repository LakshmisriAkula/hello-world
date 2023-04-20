//const input = require('readline-sync');
const prompt = require('prompt-sync')();

const input_num1 = parseInt(prompt("Enter First number : "));
const input_num2 = parseInt(prompt("Enter Second  number : "));

console.log("Enter \n1 : ADD  \n2 : SUBTRACT \n3 : MULTIPLY \n4 : DIVISION");
const option = prompt("Enter your choice : ");

console.log(option);

// Try to change with Switch-case 

if( option == 1){
   var result1 = input_num1 + input_num2;
   console.log(result1)
}
else if (option == 2) {
  var result2 = input_num1 - input_num2;
  console.log(result2)
}
else if (option == 3) {
  var result3 = input_num1 * input_num2;
  console.log(result3)
}
else if (option == 4) {
  var result4 = input_num1 / input_num2;
  console.log(result4)
}
