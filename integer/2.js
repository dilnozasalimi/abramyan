function kg(M) {
    M=parseInt(M);
    const m=Math.floor(M/1000) ;
    return m;
}
const inputM = window.prompt('please enter value for M', 0);
const result=kg(inputM);
alert(result);