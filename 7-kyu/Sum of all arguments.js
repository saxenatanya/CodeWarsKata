// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15


function sum() {
  console.log(...arguments)
  // return the sum of all arguments given.
  return [...arguments].reduce((a,b)=> a+b,0);
}

// describe("Sample tests", () => {
//   it("Small tests", () => {
//     Test.assertEquals( sum(1), 1 )
//     Test.assertEquals( sum(1, 2), 3 )
//     Test.assertEquals( sum(5, 7, 9), 21 )
//     Test.assertEquals( sum(12, 1, 1, 1, 1), 16 )
//     Test.assertEquals( sum(12, 1, 1, 1, 1, 1, 1), 18 )
//   })
// })
