function powTest(base, exponent) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Please enter a base value?", '');
let n = prompt("Please enter exponent value?", '');

if (n < 1) {
  alert(`The power ${n} is not supported. Please use a natural numbers.`);
} else {
  alert( powTest(x, n) );
}

