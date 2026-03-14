let n = 5;

for (let i = 1; i <= n; i++) {

  let line = "";

  for (let j = 1; j <= (n * 2 - 1); j++) {

    if (j === n - i + 1 || j === n + i - 1) {
      line += "*";

    } else {
      line += " ";
    }
  }

  console.log(line);
}

for (let i = n - 1; i >= 1; i--) {

  let line = "";

  for (let j = 1; j <= (n * 2 - 1); j++) {


    if (j === n - i + 1 || j === n + i - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}