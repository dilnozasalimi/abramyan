function day(A,N) {
    A = parseInt(A);
    N = parseInt(N);
    const d=((A+N)%7);
    return d;
  }
  const inputA = window.prompt('please enter value for A', 0);
  const result = day(inputA);
  alert(result);