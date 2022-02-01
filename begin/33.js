function price(x,a,y) {
    x=parseInt(x);
    a=parseInt(a);
    y=parseInt(y);
    const P=a/x;
    const Y=P*y;
    const txt = 'P=' + P + '; Y=' + Y;
    return txt;
}
const inputx = window.prompt('please enter value for x', 0);
const inputa = window.prompt('please enter value for a', 0);
const inputy = window.prompt('please enter value for y', 0);
const result = price(inputx,inputa,inputy);
alert(result);