function angleInRadians(a) {
    a=parseInt(a);
    const r=180*a/Math.PI;
    return r;
}
const inputa = window.prompt('please enter value for a', 0);
const result = angleInRadians(inputa);
alert(result);