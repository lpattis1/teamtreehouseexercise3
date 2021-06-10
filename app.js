// Variables
const main = document.querySelector("main");
const lowNum = prompt("Please provide a low number.");
const highNum = prompt("Please provide a high number.");

// Function
/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const randomNums = (lower, upper) => {
  return `<h2>The random number between <span>${parseInt(
    lowNum
  )}</span> and <span>${parseInt(highNum)}</span> is: <span>${
    Math.floor(Math.random() * upper - lower + 1) + lower
  }</span></h2>`;
};

// Result
const generateNum = randomNums(parseInt(lowNum), parseInt(highNum));
main.innerHTML = generateNum;
