const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let num = parseInt(input[0],10);

if(num >=90 && num<=100){
    console.log('A')
}else if(num >=80 && num<=89){
    console.log('B')
}else if(num >=70 && num<=79){
    console.log('C')
}else if(num >=60 && num<=69){
    console.log('D')
}else{
    console.log('F')
}