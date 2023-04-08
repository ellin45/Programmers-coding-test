function solution(s) {
    let numbers =["zero","one", "two","three","four","five","six","seven","eight","nine",];
    let answer = s;
   for(let i =0; i<numbers.length; i++){
       let arr = answer.split(numbers[i]);
       answer = arr.join(i);   
   }
    return Number(answer);
}
//s에 들어있는 문자열이 키 값일경우 value값을 리턴한다