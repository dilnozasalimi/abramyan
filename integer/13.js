function number(A) {
  A = parseInt(A);
  const c = A % 10;
  const b = (A - c) % 100;
  const a = (A - c - b) / 100;
  const txt = (a+b*10+c*10);
  return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result = number(inputA);
alert(result);