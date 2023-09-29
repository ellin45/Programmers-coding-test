function solution(arr, query) {
    //arr가 query를 순회하면서 작업을 반복한다.
       query.forEach((el,i)=> {
    //arr가 0부터 하나씩 증가하면서 짝수인지 홀수인지에 따라 
        //짝수라면 arr의 arr의 뒷부분을 자른다.
           if(i% 2 === 0){
               arr.splice(el+1)
           }else{
            arr = arr.slice(el);
        } 
       })
    return arr;
}
            // 만약 짝수인 0번의 인덱스의 쿼리라면 제일 마지막인 -1의 인덱스를 자른다
                //대신 query의 [0]번째 인덱스는 제외하고 자른다.
                // 즉4번째 인덱스는 제외하고 자른다.
                // 그러나 4번째 인덱스가 없으니 제외하고 넘어간다.
        //홀수라면 arr의 query[i]앞부분을 자른다.
            //만약 홀수인 1번의 인덱스의 쿼리라면 제일 첫번째인 arr의 1번째 인덱스를 자른다.
  
    //이 과정을 arr의 길이만큼 반복한다.
    //작업이 끝나면 남은 arr의 부분배열을 return한다.
        //남은 arr의 부분배열 === 남은 arr

