function AB(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const txt = 'a=' + c + '; b=' + a + '; c=' + b;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const inputb = window.prompt('please enter value for b', 0);
const inputc = window.prompt('please enter value for c', 0);
const result = AB(inputa, inputb, inputc);
alert(result);