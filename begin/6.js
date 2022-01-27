
function volume(a, b, c) {
    const v = a * b * c;
    const s = 2 * (a * b + b * c + a * c);
    const txt = 'v=' + v + '; s=' + s;
    return txt;
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const inputC = window.prompt('please enter value for c', 0);
const result = volume(inputA, inputB, inputC);
alert(result);