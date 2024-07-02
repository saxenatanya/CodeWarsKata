// Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

// COFFEE

// Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

// Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

// Output: string with all instances of coffee in all-caps:

// Examples:

// Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

// Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

// Good luck!


function coffee(str) {
  //code goes here
  return str.replaceAll(/coffee/ig, 'COFFEE');
}


const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold = 0;

let input, output, msg, actual, unexpected;
describe("Basic tests", function(){
  it("The word 'coffee' should be in all-caps.", () => {
    msg = "The word 'coffee' should be in all-caps."
    
    actual = coffee("Is that coffee?  Can I have it?  I'll pay you.");
    unexpected = "Is that coffee?  Can I have it?  I'll pay you.";
    assert.notStrictEqual(actual, unexpected, msg);
    
    actual = coffee("I'm having trouble staying focussed.  Let's get some coffee.");
    expected = "I'm having trouble staying focussed.  Let's get some COFFEE.";
    assert.strictEqual(actual, expected, msg);
  })
  it("It should return a string.", () => {
    actual = typeof coffee("Sweet coffee.");
    unexpected = 'number';
    msg = "It should return a string."
    assert.notStrictEqual(actual, unexpected, msg);
  })
  it("It should have a length greater than zero.", () => {
    actual = (coffee("No cream in my coffee, thanks.").length);
    unexpected = 0;
    msg = "It should have a length greater than zero.";
    assert.notStrictEqual(actual, unexpected, msg);
  })
});

describe("More tests", function(){
  it("Tests", () => {
    input = coffee("Sometimes I get an iced coffee.");
    output = "Sometimes I get an iced COFFEE.";
    assert.strictEqual(input, output);

    input = coffee("Sometimes I get a fancy coffee.  Like a mocha or an Irish coffee.  Today might be an Irish coffee day.");
    output = "Sometimes I get a fancy COFFEE.  Like a mocha or an Irish COFFEE.  Today might be an Irish COFFEE day.";
    assert.strictEqual(input, output);

    input = coffee("coffee coffee coFFEE!");
    output = "COFFEE COFFEE COFFEE!";
    assert.strictEqual(input, output);

    input = coffee("Coffee on a stick. I bet you could sell that at the fair.");
    output = "COFFEE on a stick. I bet you could sell that at the fair.";
    assert.strictEqual(input, output);

    input = coffee("Once, on a vacation, I forgot to bring my french press.  I had to go without coffee until 9am. that morning.");
    output = "Once, on a vacation, I forgot to bring my french press.  I had to go without COFFEE until 9am. that morning.";
    assert.strictEqual(input, output);  
  })
});

describe("Random Tests", function(){
  const charList = "0123456789abcdefghijklmnopqrstuvwxyz"
  let arr = [], word = '', num;
  function randomSentence() {
  arr = [];
    for (let j = 0; j < 10; j++) {
    word = ''
    word += Array.from({length: 5}, () => _.sample(charList)).join("");
    arr.push(word);
    }
    num = Math.floor(Math.random()*10);
    arr[num] = 'coffee';
    return arr.join(' ');
  }
  
  function coffeeAnswer(str) {
    return str.replace(/coffee/gi, "COFFEE");
}
  it("Tests", () => {
    for(let i=0; i<100; i++) {
      let rand = randomSentence();
      input = coffee(rand);
      output = coffeeAnswer(rand);
      assert.strictEqual(input, output);
    }  
  })
});
