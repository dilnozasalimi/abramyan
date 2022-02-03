function number(A) {
    A= parseInt(A)
    const b=Math.floor(A/10) ;
    const c=A%10;
    const d= b+c;
    const e= b*c;
    const txt = 'b=' + c + '; c=' + b + '; d=' + d+ '; e= ' + e; 
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const result=number(inputA);
alert(result);