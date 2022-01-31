function A15(a) {
    a = parseInt(a);
    const A2 = a * a;
    const A3 = A2 * a
    const A5 = A3 * A2;
    const A10 = A5 * A5;
    const A15 = A10 * A5;
    const txt = 'A2=' + A2 + '; A3=' + A3 + '; A5=' + A5 + '; A10 = ' + A10 + '; A15=' + A15;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const result = A15(inputa);
alert(result);