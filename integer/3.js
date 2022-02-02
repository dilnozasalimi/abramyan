function fileSize(B) {
    B=parseInt(B);
    const b=Math.floor(B/1024) ;
    return b;
}
const inputB = window.prompt('please enter value for B', 0);
const result=fileSize(inputB);
alert(result);