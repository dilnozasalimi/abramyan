function segment(a, c, b) {
    a = parseInt(a);
    b = parseInt(c);
    c = parseInt(b);
    const ac = a+c;
    const bc = b+c;
    const s = ac*bc;
    const txt = 'ac=' + ac + '; bc=' + bc + '; s=' + s;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const inputc = window.prompt('please enter value for c', 0);
const inputb = window.prompt('please enter value for b', 0);
const result = segment(inputa, inputc, inputb);
alert(result);