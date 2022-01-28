function module(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    const s = Math.abs(a, -1) + Math.abs(b, 1);
    const d = Math.abs(a, -1) - Math.abs(b, 1);
    const f = Math.abs(a, -1) * Math.abs(b, 1);
    const g = Math.abs(a, -1) / Math.abs(b, 1);
    const txt = 's=' + s + '; d=' + d + '; f=' + f + '; g=' + g;
    return txt;
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const result = module(inputA, inputB);
alert(result);
