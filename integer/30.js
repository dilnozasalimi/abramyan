function day(A) {
    A = parseInt(A);
    const d=(A-1)/100+1;
    return d;
  }
  const inputA = window.prompt('please enter value for A', 0);
  const result = day(inputA);
  alert(result);