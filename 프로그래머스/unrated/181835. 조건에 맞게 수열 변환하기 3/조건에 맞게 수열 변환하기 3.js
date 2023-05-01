function solution(arr, k) {
    let answer = [];
    for(let i=0;i<arr.length;i++){
        if(k % 2 === 0){
        answer[i] =  arr[i]+k
        }else{
            answer[i] = arr[i] *k
        }
    }
   return answer;
}