function solution(n) {
    var answer = 0;
    var answer = n.toString().split('').sort((a,b)=>b-a);
    return Number(answer.join(''));
}