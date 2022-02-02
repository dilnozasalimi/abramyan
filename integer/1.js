function metr(L) {
    L=parseInt(L);
    const l=Math.floor(L/100) ;
    return l;
}
const inputL = window.prompt('please enter value for L', 0);
const result=metr(inputL);
alert(result);