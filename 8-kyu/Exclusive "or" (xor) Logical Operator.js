// Exclusive "or" (xor) Logical Operator
// Overview

// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Task

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
  return a != b;
}


const {assert} = require("chai");

describe("Your 'xor' function/operator", () => {
  it("should work for the four basic cases described above", () => {
    assert.strictEqual(xor(false, false), false, "false xor false");
    assert.strictEqual(xor(true, false), true, "true xor false");
    assert.strictEqual(xor(false, true), true, "false xor true");
    assert.strictEqual(xor(true, true), false, "true xor true");
    assert.notStrictEqual(xor(true, true), true, "true xor true: 'xor' is NOT identical to 'or'");
  });
  it("should work properly when nested", () => {
    assert.strictEqual(xor(false, xor(false, false)), false, `false xor (false xor false)`);
    assert.strictEqual(xor(xor(true, false), false), true, `(true xor false) xor false`);
    assert.strictEqual(xor(xor(true, true), false), false, `(true xor true) xor false`);
    assert.strictEqual(xor(true, xor(true, true)), true, `true xor (true xor true)`);
    assert.strictEqual(xor(xor(false, false), xor(false, false)), false, `(false xor false) xor (false xor false)`);
    assert.strictEqual(xor(xor(false, false), xor(false, true)), true, `(false xor false) xor (false xor true)`);
    assert.strictEqual(xor(xor(true, false), xor(false, false)), true, `(true xor false) xor (false xor false)`);
    assert.strictEqual(xor(xor(true, false), xor(true, false)), false, `(true xor false) xor (true xor false)`);
    assert.strictEqual(xor(xor(true, true), xor(true, false)), true, `(true xor true) xor (true xor false)`);
    assert.strictEqual(xor(xor(true, xor(true, true)), xor(xor(true, true), false)), true, `(true xor (true xor true)) xor ((true xor true) xor false)`);
  });
  it("should work for random tests", () => {
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    for (let i = 0; i < 666; i++) {
      const a = Boolean(rnd(2));
      const b = Boolean(rnd(2));
      assert.strictEqual(xor(a, b), (a||b)&&!(a&&b), `${ a } xor ${ b }`);
    }
  });
});
