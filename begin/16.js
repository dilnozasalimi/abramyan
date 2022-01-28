function distance(x1, x2) {
    x1 = parseInt(x1);
    x2 = parseInt(x2);
    const l = Math.abs(x1,1) - Math.abs(x2,1);
    return l;
}
const inputx1 = window.prompt('please enter value for x1', 0);
const inputx2 = window.prompt('please enter value for x2', 0);
const result = distance(inputx1, inputx2);
alert(result);