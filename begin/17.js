function segmentLength(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const ac = c - a;
    const bc = c - b;
    const k = ac + bc;
    const txt = 'ac=' + ac + '; bc=' + bc + '; k=' + k;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const inputb = window.prompt('please enter value for b', 0);
const inputc = window.prompt('please enter value for c', 0);
const result = segmentLength(inputa, inputb, inputc);
alert(result);