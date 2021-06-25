function calculate(a, o, b) {
 var result = 0;
 
    if(o === "+") { 
    return result =a + b;
    }
    if(o === "-") {
      return  result = a - b;
    }
    if(o === "/") { 
    return b !== 0 ? a/b : null;  
    }
    if(o === "*") {
    return result = a * b;
    }
 
 return null; 
}
