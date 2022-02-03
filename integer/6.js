function number(A) {
    A = parseInt(A);
    const c =Math.floor ( A / 10);
    const b =(A % 10);
    const txt = 'c=' + b+ '; b=' + c;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result = number(inputA);
alert(result);