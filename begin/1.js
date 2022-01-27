function perimetr(a) {
    const p=4*a;
    return p;
}

const inputText = window.prompt('Please inter value for a', 0);

const result=perimetr(inputText);
alert(result);