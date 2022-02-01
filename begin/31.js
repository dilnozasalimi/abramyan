function gradus(TF) {
    TF=parseInt(TF);
    const TC=(TF-32)*5/9;
    return TC;
}
const inputTF = window.prompt('please enter value for TF', 0);
const result = gradus(inputTF);
alert(result);