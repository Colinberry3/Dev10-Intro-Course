var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var testArrayTwo = [8, 3, 15, 28, 10000, 6, 14];
var sum = 0;
var maxNumber;


for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
  sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + " is: " + sum);

function findMax() {
  maxNumber = Math.max.apply(null, testArray);
  console.log(maxNumber);
}
