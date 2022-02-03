function number(A) {
    A = parseInt(A);
    const b = Math.floor(A / 10);
    const c = A % 10;
    const f =Math.floor(A / 10)+ A % 10*10;
    const txt = 'b=' + c + '; c=' + b + '; f=' + f;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result=number(inputA);
alert(result)