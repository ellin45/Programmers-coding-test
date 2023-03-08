function solution(array, n) {
    var answer = 0;
    for(let i=0; i<array.length;i++){
        const item = array[i]
        if(array[i] === n){
            answer++;
        }
        }
    return answer;
}