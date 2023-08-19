function someOFevenFibonacci(limit) {
  let fibonacciArray = [0, 1];
  console.log(fibonacciArray[fibonacciArray.length - 1] <= 400000);

  for (let i = 1; i < limit; i++) {
    if (fibonacciArray[fibonacciArray.length - 1] <= 400000) {
      fibonacciArray.push(
        fibonacciArray[fibonacciArray.length - 1] +
          fibonacciArray[fibonacciArray.length - 2]
      );
    }
  }
  console.log(fibonacciArray);
  fibonacciArray = fibonacciArray.filter((ele) => ele % 2 === 0); // filtering even elements
  fibonacciArray = fibonacciArray.reduce((a, b) => a + b); // addition of even element

  return fibonacciArray;
}
let result = someOFevenFibonacci(29);
console.log(result);
