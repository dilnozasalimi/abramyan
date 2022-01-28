function average(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    const n = (a + b) / 2;
    return n;
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const result = average(inputA, inputB);
alert(result);