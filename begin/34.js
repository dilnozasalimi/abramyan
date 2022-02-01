function price(x, a, y, b) {
    x = parseInt(x);
    a = parseInt(a);
    y = parseInt(y);
    b = parseInt(b);
    const P = a / x;
    const Y = b / y;
    const C = P / Y;
    const txt = 'P=' + P + '; Y=' + Y + ' ;C=' + C;
    return txt;
}
const inputx = window.prompt('please enter value for x', 0);
const inputa = window.prompt('please enter value for a', 0);
const inputy = window.prompt('please enter value for y', 0);
const inputb = window.prompt('please enter value for b', 0);
const result = price(inputx, inputa, inputy, inputb);
alert(result);