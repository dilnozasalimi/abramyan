function hypotenuse(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    const c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    const p=a+b+c;
    const txt = 'c=' + c + '; p=' + p ;
    return txt;
}
const inputA = window.prompt('please enter value for a', 0);
const inputB = window.prompt('please enter value for b', 0);
const result = hypotenuse(inputA, inputB);
alert(result);
