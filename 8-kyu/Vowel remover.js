// reate a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// Don't worry about uppercase vowels.

function shortcut(string){
  return string.replace(/[aeiou]/g,'');
}

describe("Tests", () => {
  it("test", () => {
Test.expect(shortcut('hello') == 'hll', 'encode failed. Your result: '+shortcut('hello')+' Expected result: hll')
Test.expect(shortcut('how are you today?') == 'hw r y tdy?', 'shortcut did not work properly');
Test.expect(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
Test.expect(shortcut('never') == 'nvr', 'shortcut did not work properly');

  });
});
