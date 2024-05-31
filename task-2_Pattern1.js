function generatePattern(n) {
  let result = "";

  for (let i = 0; i <= n - 1; i++) {
    result += generateLine(i);
  }

  for (let i = n - 2; i >= 0; i--) {
      result += generateLine(i);
  }

  function generateLine(i) {
    // console.log(i);

    let line = "";
    let spaces = "  ".repeat(n - i);

    for (let j = 1; j <= 2 * i + 1; j += 2) {
      line += j + " ";
      // console.log(j);
    }

    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j) + " ";
    }

    return spaces + line + "\n";
  }

  console.log(result);
}

generatePattern(5);


//I Took Help From Google To Print The Pattern