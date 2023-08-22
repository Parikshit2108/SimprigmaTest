let getAverageRating = (array, lowCount, highCount) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array.length, "10");
  array.splice(0, lowCount);
  array.splice(array.length - highCount, highCount);
  console.log(array.length, "13");
  return array?.reduce((a, b) => a + b) / array.length;
};
// let finalRatings = getAverageRating([70, 99, 0, 96, 30], 0, 0);
// let finalRatings = getAverageRating([91, 90, 50], 1, 1);
// let finalRatings = getAverageRating([23,23,23,23,23,23,23,23], 2, 3);
// let finalRatings = getAverageRating(
//   [31, 52, 20, 86, 47, 76, 82, 27, 42, 29],
//   1,
//   4
// );
let finalRatings = getAverageRating([1, 1, 0, 0, 1, 1, 0, 1, 0, 2], 2, 2);
console.log(finalRatings);
