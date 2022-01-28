function diameter(s) {
    s = parseInt(s);
    const d = 2 * Math.sqrt(s / Math.PI);
    const r = Math.sqrt(s / Math.PI);
    const l = 2 * Math.PI * r;
    const txt = 'd=' + d + '; r=' + r + '; l=' + l;
    return txt;
}
const inputs = window.prompt('please enter value for l', 0);
const result = diameter(inputs);
alert(result);