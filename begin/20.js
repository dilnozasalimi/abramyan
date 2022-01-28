function lengthA(x1, y1, x2, y2) {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    const l = Math.sqrt((Math.pow(x2, 2) - Math.pow(x1, 2) + (Math.pow(y2, 2) - Math.pow(y1, 2))));
    return l;
}
const inputx1 = window.prompt('please enter value for x1', 0);
const inputy1 = window.prompt('please enter value for y1', 0);
const inputx2 = window.prompt('please enter value for x2', 0);
const inputy2 = window.prompt('please enter value for y2', 0);
const result = lengthA(inputx1, inputy1,inputx2,inputy2);
alert(result);