function time(A) {
    A = parseInt(A);
    const t= A%3600/60;
    return t;
  }
  const inputA = window.prompt('please enter value for A', 0);
  const result = time(inputA);
  alert(result);