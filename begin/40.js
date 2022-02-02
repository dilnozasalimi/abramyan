function systemSolution(A1, B1, C1, A2, B2, C2) {
    A1 = parseInt(A1);
    B1 = parseInt(B2);
    C1 = parseInt(C1);
    A2 = parseInt(A2);
    B2 = parseInt(B2);
    C2 = parseInt(C2);
    const D = A1 * B2 - A2 * B1;
    const x = (C1 * B2 - C2 * B1) / D;
    const y = (A1 * C2 - A2 * C1)/D;
    const txt = 'D=' + D + '; x=' + x + ' ;y=' + y;
    return txt;
}
const inputA1 = window.prompt('please enter value for A1', 0);
const inputB1 = window.prompt('please enter value for B1', 0);
const inputC1 = window.prompt('please enter value for C1', 0);
const inputA2 = window.prompt('please enter value for A2', 0);
const inputB2 = window.prompt('please enter value for B2', 0);
const inputC2 = window.prompt('please enter value for C2', 0);
const result = systemSolution(inputA1, inputB1, inputC1, inputA2, inputB2, inputC2);
alert(result);