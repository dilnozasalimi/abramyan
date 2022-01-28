function squareRoot(a,b) {
    a = parseInt(a);
    b = parseInt(b);
  const  t=Math.sqrt(a*b);
return t; 
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const result = squareRoot(inputA, inputB);
alert(result);