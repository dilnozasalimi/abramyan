function number(A) {
    A = parseInt(A);
    const c = A / 10;
    const b = A % 10;
    const txt = 'c=' + c + '; b=' + b;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result = number(inputA);
alert(result);