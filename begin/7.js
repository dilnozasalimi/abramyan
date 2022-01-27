function circumference(r) {
    const l=2*Math.PI*r;
    const s=Math.PI*Math.pow(r,2);
    const txt = 'l=' + l + '; s=' + s;
    return txt;
}
const inputText=window.prompt('please enter value for r',0);
const result=circumference(inputText);
alert(result);