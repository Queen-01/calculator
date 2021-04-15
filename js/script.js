//Business logic/backend

var add = function (number1, number2) {
  return number1 + number2;
};
// alert(add(4, 5));
var subtract = function (number1, number2) {
  return number1 - number2;
};
// alert(subtract(10, 5));
var add = function (number1, number2) {
  return number1 + number2;
};
// var number1 = prompt("Enter a number:");
// alert(number1);
var add = function (number1, number2) {
  return number1 + number2;
};
var multiply = function (number1, number2) {
  return number1 * number2;
};
var divide = function (number1, number2) {
  return number1 / number2;
};
// var number1 = prompt("Enter a number:");
// var number2 = prompt("Enter another number:");
// alert(add(number1, number2));
// var add = function (number1, number2) {
//   return number1 + number2;
// };

//Everything below this line is user interface logic

$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result= add(number1,number2);
   $("#output").text(result);
  });
})