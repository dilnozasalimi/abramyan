function value(x) {
    x=parseInt(x);
    const y= 3*Math.pow(x,6)-6*Math.pow(x,2)-7;
    return y;
}
const inputText=window.prompt('please enter value for x',0);
const result=value(inputText);
alert(result);