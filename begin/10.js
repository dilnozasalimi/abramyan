function sum(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    const s = Math.pow(a, 2)+Math.pow(b,2)
    const d = Math.pow(a, 2)-Math.pow(b,2)
    const f = Math.pow(a, 2)*Math.pow(b,2)
    const g = Math.pow(a, 2)/Math.pow(b,2)
    const txt = 's=' + s + '; d=' + d + '; f=' + f + '; g=' + g;
    return txt;
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const result = sum(inputA, inputB);
alert(result);
