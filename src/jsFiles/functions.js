function calcNumber(number1, number2) {
  console.log(number1 * number2);
}
function calcNumber(number) {
  console.log(number * number);
}

calcNumber(10); // 100
/* 
Only latest function with sma name is accepted.
JS wont accept function overloading

If we used arrow functions it will throw error while declaring itself.
*/
