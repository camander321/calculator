
var input = 0;
var result = 0;
var operation = "";

var updateNumber = function(number) {
  var total = document.getElementById("total");
  total.innerHTML = number.toString();
}

$(".button").click(function () {
  input = input * 10;
  input = input + parseInt($(this).html());
  updateNumber(input);
 });

 $(".operator").click(function () {
   var isFirst = operation === "";
   operation = $(this).html().trim();

   if (!isFirst) {
     if (operation === "+") {
       result = result + input;
     } else if (operation === "-") {
       result = result - input;
     } else if (operation === "/") {
       result = result / input;
     } else if (operation === "*") {
       result = result * input;
     }
   } else {
     result = input;
   }

   if (operation === "CLR") {
     result = 0;
     operation = "";
   }
   updateNumber(result);
   input = 0;
  });

  $(".equals").click(function () {
    if (operation === "+") {
      result = result + input;
    } else if (operation === "-") {
      result = result - input;
    } else if (operation === "/") {
      result = result / input;
    } else if (operation === "*") {
      result = result * input;
    }
    updateNumber(result);
    input=0;
    result=0;
    operation="";
   });
