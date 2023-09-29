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
          

