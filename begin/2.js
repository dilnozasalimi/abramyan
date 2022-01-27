
function square(a) {
    const s= Math.pow(a, 2);
    return s;
}
const inputText=window.prompt('Please enter value for a', 0);
const result=square(inputText);
alert(result);