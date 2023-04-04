function solution(n) {
    var answer = 0;
    var reverse = 0;
    var answer = n.toString(3)
    var reverse = parseInt(answer.split('').reverse().join(''),3);
    
    return reverse;
}