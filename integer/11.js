function number(A) {
    A = parseInt(A);
    const b = Math.floor(A / 100);
    const c = Math.floor(A % 10);
    const d = Math.floor(A / 10)%10;
    const f = b + c + d;
    const e = b * c * d;
    const txt = 'b=' + c + '; c=' + d + '; d=' + b + '; f=' + f + '; e=' + e;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result = number(inputA);
alert(result);