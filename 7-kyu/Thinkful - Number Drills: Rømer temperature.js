/* 
You're writing an excruciatingly detailed alternate history novel set in a world where Daniel Gabriel Fahrenheit was never born.

Since Fahrenheit never lived the world kept on using the Rømer scale, invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.

Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius. You don't want to convert everything by hand, so you've decided to write a function, celsius_to_romer() that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer.

For example: celsius_to_romer(24) should return 20.1.
*/


function celsiusToRomer(temp) {
  return temp * 0.525 + 7.5;
}

// tests 
const { assert } = require('chai')

describe("Celsius to Romer", function(){
  it("Basic testing", function(){
    assert.approximately(celsiusToRomer(24), 20.1, 0.000000001, 'celsiusToRomer(24)');
    assert.approximately(celsiusToRomer(8), 11.7, 0.000000001, 'celsiusToRomer(8)');
    assert.approximately(celsiusToRomer(29), 22.725, 0.000000001, 'celsiusToRomer(29)');
  });
  it("Random testing", function() {
    let sol = t => t * 21 / 40 + 7.5;

    for(let i = 0; i < 100; i++) {
      let t = Math.floor(Math.random() * (100) ) - 20;
      assert.approximately(celsiusToRomer(t), sol(t), 0.000000001, `celsiusToRomer(${t})`);
    }
  });
});
