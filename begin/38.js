function linearEquation(A,B) {
    A= parseInt(A);
    B = parseInt(B);
    const x=-B/A; A!=0;
    return x;
}
const inputA = window.prompt('please enter value for A', 0);
const inputB = window.prompt('please enter value for B', 0);
const result=linearEquation(inputA,inputB);
alert(result);