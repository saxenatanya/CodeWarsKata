// A bug lives in a world which is a cuboid and has to walk from one corner of the cuboid to the opposite corner (see the picture below).

// Google 'Cuboid Space Diagonal'

// Task
// Define a function which takes 3 arguments: the length a , width b, and height c of the bug's "world", and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers.

// Note: The bug cannot fly and has to maintain contact with a surface at all times but can walk up walls.

// Example
// a=1, b=2, c=3: distance=4.242640687119285

function shortestDistance(a, b, c) {
  // Your code here
     return Math.min(
    Math.sqrt(Math.pow(a,2) + (b+c) * (b+c)),
    Math.sqrt(Math.pow(b,2) + (a+c) * (a+c)),
    Math.sqrt(Math.pow(c,2) + (a+b) * (a+b))
  );
}
