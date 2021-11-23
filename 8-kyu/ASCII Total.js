// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(str)
{
  if(str.length > 0){
    return str.split('').reduce((acc,val) => { return acc+ val.charCodeAt(0)},0);

  }
 return 0;
}

// describe("Tests", () => {
//   it("test", () => {
// console.log("no chars should return null");

// Test.assertSimilar(uniTotal(""), 0);

// console.log("Should work with Single Letters");

// Test.assertSimilar(uniTotal("a"), 97);
// Test.assertSimilar(uniTotal("b"), 98);
// Test.assertSimilar(uniTotal("c"), 99);
// Test.assertSimilar(uniTotal("d"), 100);
// Test.assertSimilar(uniTotal("e"), 101);

// console.log("should work with multiple letters");
// Test.assertSimilar(uniTotal("aaa"), 291);

// console.log("should work with sentences and spaces");

// Test.assertSimilar(uniTotal("Mary Had A Little Lamb"),1873);
//   });
// });
