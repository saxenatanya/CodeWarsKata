// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys 


function reverse(n){
  // your code here
  console.log(n);
   return +Array.of(n).join().split([]).reverse().join([]);
  
//   let rev = 0;
//     while (n) {
//         rev = rev * 10 + n % 10;
//         n = Math.floor(n/10);
//     }
//     return rev;
}

