function pathS(V1,V2,T,S) {
        V1 = parseInt(V1);
        V2 = parseInt(V2);
        T = parseInt(T);
        S= parseInt(S);
        const s=S+V1*T+V2*T;
        return s;
    }
    const inputV1 = window.prompt('please enter value for V1', 0);
    const inputV2 = window.prompt('please enter value for V2', 0);
    const inputT = window.prompt('please enter value for T', 0);
    const inputS = window.prompt('please enter value for S', 0);
    const result = pathS(inputV1, inputV2, inputT, inputS);
    alert(result);
