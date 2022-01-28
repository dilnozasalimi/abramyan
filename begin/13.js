function squareR(r1, r2) {
    a = parseInt(r1);
    b = parseInt(r2);
    const s1 = Math.PI*Math.pow(r1,2);
    const s2=Math.PI*Math.pow(r2,2);
    const s3= s1-s2;
    const txt = 's1=' + s1 + '; s2=' + s2 + '; s3='+s3;
    return txt;
}
const inputr1 = window.prompt('please enter value for a', 0);
const inputr2 = window.prompt('please enter value for b', 0);
const result = squareR(inputr1, inputr2);
alert(result);