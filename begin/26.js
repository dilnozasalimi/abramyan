function value(x) {
    x=parseInt(x);
    const y= 4*Math.pow(x,6)-Math.pow(3,6)-7*Math.pow(x,3)-Math.pow(3,3)+2;
    return y;
}
const inputText=window.prompt('please enter value for x',0);
const result=value(inputText);
alert(result);