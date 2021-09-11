// Code as fast as you can!

// You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

class Counter {
  constructor(count){
  this.count=0;
  }
 increment(count){
  return this.count++;
}

 check(count){
  return this.count;
}

};
// function Counter() {
//   var counter = 0;  
//   this.check = function(){return counter;};
//   this.increment = function(){counter++;};
// };

// function Counter() {
//   var _count = 0;

//   this.check = function() {
//     return _count;
//   }
//   this.increment = function() {
//     _count++;
//   }
// };
