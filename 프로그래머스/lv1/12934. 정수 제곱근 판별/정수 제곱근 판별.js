function solution(n) {
    var answer = 0;
    var sqrt = Math.sqrt(n);
    var x = Math.sqrt(n);
    if(sqrt %1 === 0){
        return Math.pow(sqrt+1,2);
    }else{
        return -1;
    }
    return answer;
}