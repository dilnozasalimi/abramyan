function otrezok(A,B) {
    A=parseInt(A);
    B=parseInt(B);
    const n=A%B;
    return n;
}
const inputA=window.prompt('please enter value for A', 0);
const inputB=window.prompt('please enter value for B', 0);
const result=otrezok(inputA,inputB);
alert(result);