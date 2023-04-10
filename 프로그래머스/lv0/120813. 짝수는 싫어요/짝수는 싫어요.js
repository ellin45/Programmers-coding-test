function solution(n) {
    let answer = [];
    let cnt = 1;
  
    while(cnt <= n){
        if(cnt % 2 === 1){
             answer.push(cnt)
    }
        cnt = cnt +1
    }
    
    return answer;
}