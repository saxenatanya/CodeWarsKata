function shifter(s){
  // your code here
  let letters =["H", "I", "N", "O", "S", "X", "Z", "M" ,"W"];
  arrays = [...new Set(s.split(' '))];
  let count =0;
  if(s.length === 0) return [];
  arrays.forEach((val) => {
    let check = val.split('').every((letter) => letters.includes(letter));
    if(check) count++;
  })
  console.log(count);
  return count;
}
