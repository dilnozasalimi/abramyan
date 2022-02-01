function gradus(TC) {
    TC=parseInt(TC);
    const TF=9/5*TC+32;
    return TF;
}
const inputTC = window.prompt('please enter value for TC', 0);
const result = gradus(inputTC);
alert(result);