function solution(left, right) {
    var answer = 0;
    var cnt = 0;
   for(var i=left; i<=right; i++){
    for(var j=1; j<=i; j++){
       if(i %j === 0){
           cnt++;
       }
    }
       if(cnt%2 === 0){
           answer += i;
       }else{
           answer -= i;
       }
           cnt=0;
    
}    return answer;   
}
    

