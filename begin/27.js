function A8(a) {
    a = parseInt(a);
    const A2 = a * a;
    const A4 = A2 * A2;
    const A8 = A4 * A4
    const txt = 'A2=' + A2 + '; A4=' + A4 + '; A8=' + A8;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const result = A8(inputa);
alert(result);