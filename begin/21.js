function lengthA(x1, y1, x2, y2,x3,y3) {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    x3 = parseInt(x3);
    y3 = parseInt(y3);
 const a = Math.abs(x2 - x1);
 const b = Math.abs(y2 - y1);
 const c= Math.abs(x3 - x2);
const p=(a+b+c)/2;
const s=Math.sqrt(p*(p-a)*(p+b)*(p-c));
const txt = 'a=' + a + '; b=' + b + '; c=' + c + '; p=' + p +' ; s='+s;
    return txt;
}
const inputx1 = window.prompt('please enter value for x1', 0);
const inputy1 = window.prompt('please enter value for y1', 0);
const inputx2 = window.prompt('please enter value for x2', 0);
const inputy2 = window.prompt('please enter value for y2', 0);
const inputx3 = window.prompt('please enter value for x3', 0);
const inputy3 = window.prompt('please enter value for y3', 0);
const result = lengthA(inputx1, inputy1,inputx2,inputy2,inputx3,inputy3);
alert(result);