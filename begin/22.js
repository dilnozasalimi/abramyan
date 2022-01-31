function AB(a, b) {
    const txt = 'a=' + b + '; b=' + a;
    return txt;
}
const inputa = window.prompt('please enter value for a', 0);
const inputb = window.prompt('please enter value for b', 0);
const result = AB(inputa, inputb);
alert(result);
