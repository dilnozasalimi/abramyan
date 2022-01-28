function perimetrSquare(x1, y1, x2, y2) {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    const x = Math.abs(x2 - x1);
    const y = Math.abs(y2 - y1);
    const p = 2 * (x + y);
    const s = x * y;
    const txt = 'x=' + x + '; y=' + y + '; p=' + p + '; s=' + s;
    return txt;

}
const inputx1 = window.prompt('please enter value for x1', 0);
const inputy1 = window.prompt('please enter value for y1', 0);
const inputx2 = window.prompt('please enter value for x2', 0);
const inputy2 = window.prompt('please enter value for y2', 0);
const result = perimetrSquare(inputx1, inputy1, inputx2,inputy2);
alert(result);
