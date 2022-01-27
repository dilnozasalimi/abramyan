
function perimetr(a,b) {
    a=parseInt(a);
    b=parseInt(b);
    const s=a*b;
    const p=2*(a+b);
    const txt='s=' + s + '; p=' + p;
    return txt;
}

const inputA=window.prompt('please enter value for a', 0);
const inputB=window.prompt('please enter value for b',0);
const result=perimetr(inputA,inputB);
alert(result);