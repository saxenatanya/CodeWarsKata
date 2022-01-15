// Task
// Given a number N, determine if the sum of N consecutive numbers is odd or even.

// If the sum is definitely an odd number, return Odd.
// If the sum is definitely an even number, return Even.
// If the sum can be either odd or even ( depending on which first number you choose ), return Either.
// Examples
// Odd_or_Even(1) should return Either, because the sum can be odd or even.
// Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
// Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
// Note
// const ODD = "Odd";
// const EVEN = "Even";
// const EITHER = "Either";

function oddOrEven(n) {
  const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";
//   return n%2 === 0 ? EVEN :n === 1 || n === 0 ? EITHER : ODD;
   return n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN
}

const {assert} = require("chai");

describe("Odd or even?",()=>{
  it("example tests",()=>{
    assert.strictEqual( oddOrEven(1), EITHER );
    assert.strictEqual( oddOrEven(6), ODD );
    assert.strictEqual( oddOrEven(8), EVEN );
  });
});
