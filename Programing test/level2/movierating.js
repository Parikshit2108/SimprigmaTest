function getRatings(array, lowest, heigh) {
  for (let index = 0; index < array.length; index++) {
    for (let ind = index + 1; ind < array.length; ind++) {
      if (array[index] > array[ind]) {
        let temp = array[index];
        array[index] = array[ind];
        array[ind] = temp;
      }
    }
  }
  array.splice(0, lowest);
  array.splice(array.length - 1, heigh);
  let result = array.reduce((a, b) => a + b) / array.length;
  return result;
}
let ratings = getRatings([1, 5, 6, 9, 8], 1, 1);
