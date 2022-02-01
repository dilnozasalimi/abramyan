function pathS(V,U,T1,T2) {
    V = parseInt(V);
    U = parseInt(U);
    T1 = parseInt(T1);
    T2= parseInt(T2);
    const S=V*T1+(V-U)*T1;
    return S;
}
const inputV = window.prompt('please enter value for V', 0);
const inputU = window.prompt('please enter value for U', 0);
const inputT1 = window.prompt('please enter value for T1', 0);
const inputT2 = window.prompt('please enter value for T2', 0);
const result = pathS(inputV, inputU, inputT1, inputT2);
alert(result);