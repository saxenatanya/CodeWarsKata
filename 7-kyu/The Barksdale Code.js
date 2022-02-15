function decode(string) {
  //your code here
const obj={1:9,2:8,3:7,4:6,5:0,6:4,7:3,8:2,9:1,0:5}
 return string.split('').map(v=>v=obj[v]).join('')
  
}
