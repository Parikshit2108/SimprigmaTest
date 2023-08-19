function findMultioliesOF3and5(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

let result = findMultioliesOF3and5(1000);
