function discriminant(A, B, C) {
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);
    const d = Math.pow(B, 2) - 4 * A * C;
    const x1 = (-B + Math.sqrt(d)) / (2 * A);
    const x2 = (-B + Math.sqrt(d)) / (2 * A);
    const txt='d=' + d + '; x1=' + x1 + ' ;x2=' + x2;
    return txt;
}
const inputA = window.prompt('please enter value for A', 0);
const inputB = window.prompt('please enter value for B', 0);
const inputC = window.prompt('please enter value for C', 0);
const result = discriminant(inputA, inputB, inputC);
alert(result);