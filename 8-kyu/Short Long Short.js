// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"



function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

const Test = require('@codewars/test-compat');

describe("Basic tests", function() {
  it("Should pass basic tests", function() {
    Test.assertEquals(solution('45', '1'), '1451');
    Test.assertEquals(solution('13', '200'), '1320013');
    Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
    Test.assertEquals(solution('U', 'False'), 'UFalseU');
    Test.assertEquals(solution("a", "bb"), "abba");
    Test.assertEquals(solution("aa", "b"), "baab");
  });
});


describe("Random tests", function() {
  it("Should pass random tests", function() {
  
    function _solution(a, b){
      return a.length > b.length ? b + a + b : a + b + a;
    }   
    
    let lettersArray = "abcefghijklmnopqrstuvxyz".split("");
    
    function generateRandomString(array){
      return Test.randomize(array).slice(0, Math.random() * array.length).join("");
    }
  
    let s1, s2, expected;
        
    for (let i = 0; i < 100; i++) {
      s1 = generateRandomString(lettersArray);
      s2 = generateRandomString(lettersArray);
      while (s2.length === s1.length) {
        s2 = generateRandomString(lettersArray);
      }
      expected = _solution(s1, s2);
      Test.assertEquals(solution(s1, s2), expected);
    }
  });
});
