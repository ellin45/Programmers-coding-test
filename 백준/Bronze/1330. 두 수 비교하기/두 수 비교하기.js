const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");


let A = parseInt(input[0],10);
let B = parseInt(input[1],10);


if(A > B){
    console.log('>') 
}else if(A <B){
    console.log('<')
}else {
    console.log('==')
}


