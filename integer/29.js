function segmentLength(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const d = a * b;
    const f = c * c;
    const G = Math.floor(d / f);
    const N = d % f;
    const txt = 'G=' + G + '; N=' + N;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const inputb = window.prompt('please enter value for b', 0);
const inputc = window.prompt('please enter value for c', 0);
const result = segmentLength(inputa, inputb, inputc);
alert(result);