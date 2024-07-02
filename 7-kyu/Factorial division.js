// You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.

// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.

// Some hints: We can see that (n + 1)! = (n + 1) * n!. So (n + 1)! / n! = (n + 1)

// We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)

// And your solution should be able to calculate n! / d!.

// *** Please, don't worry about the parameters. You will only receive positive integers, and the first one will be greater than the second one


function factorialDivision(n, d) {
  n = BigInt(n);
  d = BigInt(d);
  let tt = BigInt(1);
  for (let i = d + BigInt(1); i <= n; i++) {
    tt = tt * i;
  }
  return tt;
}

const tester = (a, b, e) => it(`factorialDivision(${a}, ${b})`, () => assert.strictEqual(factorialDivision(a, b), e));
describe("basic tests", () => {
  tester(262n, 256n, 305328778307280n);
  tester(9741n, 9737n, 8998013414063880n);
  tester(94906265n, 94906263n, 9007199041343960n);
  tester(9007199254740991n, 9007199254740990n, 9007199254740991n);
});

describe("random tests", () => {
  function sol(n, d) {
    let r = 1n;
    for (let i = n; i > d; i--) r *= i;
    return r;
  }
  for (let i = 0; i < 100; i++) {
    const A = Math.floor(Math.random() * 10000000) + 1;
    const a = BigInt(A);
    const b = BigInt(Math.floor(Math.random() * (10000000 - A) + A));
    tester(a, b, sol(a, b));
  }
});
