import isPrimeCheck from "./modules/isPrimeCheck.js";
import isInteresting from "./modules/isInteresting.js";

let button = document.querySelector("#submitButton");
let input = document.querySelector("#numberInput");
let primeInput = document.querySelector("#primeInput");

button.addEventListener("click", () => {
  let value = parseInt(input.value);

  let interesting = isInteresting(value);

  let output = document.querySelector("#output");
  output.innerText = interesting;
});

document.querySelector("#primeButton").addEventListener("click", () => {
  let n = parseInt(primeInput.value);

  isPrimeCheck(n);

  const output = document.querySelector("#primeOutput");
  if (isPrimeCheck(n)) {
    output.innerHTML = n + " is prime!";
  } else {
    output.innerHTML = n + " is not prime!";
  }
});
