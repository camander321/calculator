// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);

var input = 0;
var result = 0;
var operation;

$(".button").click(function () {
  input = input * 10;
  input = input + parseInt($(this).html());
  // alert(input);
 });

 $(".operator").click(function () {

   operation = $(this).html().trim();

   if (operation === "+") {
     result = result + input;
   } else if (operation === "-") {
     result = result - input;
   } else if (operation === "/") {
     result = result / input;
   } else if (operation === "*") {
     result = result * input;
   }
   alert(result);
   input = 0;
  //  alert(value1 + " " + operation);
  });

  $(".equals").click(function () {
    if (operation === "+") {
      alert(result + input);
    } else if (operation === "-") {
      alert(result - input);
    } else if (operation === "/") {
      alert(result / input);
    } else if (operation === "*") {
      alert(result * input);
    }
    input=0;
    result=0;
    operation="";
   });
