// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

const assert = require('chai').assert;

const assertNotPrinting = actual => assert.isDefined(actual, "You should return true or false. Did you print the answer instead?\n");
const assertToday = (input, expected) => assert.strictEqual(isToday(new Date(input.getTime())), expected, `date = '${input.toJSON()}'`);

describe("Fixed tests", () => {
  const today = new Date();
  it("should return <code>true</code> for today", () => {
    let actualToday = isToday(today);
    assertNotPrinting(actualToday);
    assert.strictEqual(actualToday, true)
  });
  
  it("should return <code>false</code> for tomorrow", () => {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    assertToday(tomorrow, false);
  });
  
  it("should return <code>false</code> for yesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    assertToday(yesterday, false);
  });
});

describe("Random tests", () => {
  const rnd = a => Math.floor(Math.random() * a);
  const today = new Date();
  const sol = d => d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() == today.getDate();
  it("should work for random inputs", () => {
    for(let run = 0; run < 100; ++run) {
      let date = new Date();
      if(rnd(5) != 0) {
        date.setFullYear(rnd(300)+1900);
        let month = rnd(12);
        date.setMonth(rnd(12));
        let day = rnd([31,28,31,30,31,30,31,31,30,31,30,31][month]) + 1;
        date.setDate(day);
      }
      date.setHours(rnd(24));
      date.setMinutes(rnd(60));
      date.setSeconds(rnd(60));
      date.setMilliseconds(rnd(1000));
      
      assertToday(date, sol(date));
    }
  });
  it("should work for some edge cases", () => {
    let date = new Date();
    
    // start of today
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    assertToday(date, true);
    
    // end of yesterday
    date.setTime(date.getTime() - 1);
    assertToday(date, false);
    
    // end of today
    date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    assertToday(date, true);
    
    // start of tomorrow
    date.setTime(date.getTime() + 1);
    assertToday(date, false);
    
    // check year correctly
    date = new Date();
    date.setFullYear(date.getFullYear() + 100);
    assertToday(date, false);
    
    // use correct day function
    date = new Date();
    date.setTime(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    assertToday(date, false);
    
    date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    assertToday(date, false);
  });
});
