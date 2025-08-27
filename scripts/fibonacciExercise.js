function fibonacciGenerator(n) {
  var output = [];

  if (n <= 2) {
    let i = 0;
    while (i < n) {
      output.push(i);
      i++;
    }
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
  }

  console.log(output);
}

fibonacciGenerator(n);