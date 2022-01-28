function radiusR(l) {
    l = parseInt(l);
    const r=l/2*Math.PI;
    const s=Math.PI*Math.pow(r,2);
    const txt = 'r=' + r + '; s=' + s;
    return txt;
}
const inputl = window.prompt('please enter value for l', 0);
const result = radiusR(inputl);
alert(result);