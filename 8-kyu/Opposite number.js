// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  return number > 0 ? -Math.abs(number) : Math.abs(number);
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(opposite(1), -1,)
  });
});
