function distance(V1, V2, S, T) {
    V1 = parseInt(V1);
    V2 = parseInt(V2);
    S = parseInt(S);
    T = parseInt(T);
    const D=Math.abs(S-(V1*T+V2*T));
    return D;
}
const inputV1 = window.prompt('please enter value for V1', 0);
const inputV2 = window.prompt('please enter value for V2', 0);
const inputS = window.prompt('please enter value for S', 0);
const inputT = window.prompt('please enter value for T', 0);
const result = distance(inputV1, inputV2, inputS, inputT);
alert(result);