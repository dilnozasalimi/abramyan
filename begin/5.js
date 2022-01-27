
function lengthCube(a) {
    const v = Math.pow(a, 3);
    const s = 6 * Math.pow(a, 2);
    const txt = 'v=' + v + '; s=' + s;
    return txt;
}
const inputA = window.prompt('please enter value for a', 0);
const result = lengthCube(inputA);
alert(result);