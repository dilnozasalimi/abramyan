function angleInRadians(a) {
    a=parseInt(a);
    const r=Math.PI*a/180;
    return r;
}
const inputa = window.prompt('please enter value for a', 0);
const result = angleInRadians(inputa);
alert(result);