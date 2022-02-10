function number(A) {
    A = parseInt(A);
    const b = Math.floor(A%10000/1000) ;
    return b;
  }
  const inputA = window.prompt('please enter value for A', 0);
  const result = number(inputA);
  alert(result);