function number(A) {
    A = parseInt(A);
    const b = Math.floor(A / 100);
    const c = Math.ceil(A % 10) ;
    const d = Math.ceil (A / 100);
    const txt = 'b=' + c + '; c=' + d + '; d=' + b;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result = number(inputA);
alert(result);