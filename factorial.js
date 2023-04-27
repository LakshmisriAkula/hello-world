var a = 6;

function factorial(n){
    return new Array(n).fill(null)
      .map((currentValue, index) => index + 1)
     .reduce((accumulator, currentValue) => accumulator * currentValue);
 }
 
 
    
     console.log(factorial(a));
 