function solution(array) {
    let map = new Map();
    let max = 0;
    //map을 만드는 이유
    //키와 값을 비교해서 키에 해당하는 값 : count를 세어줄거야
    array.forEach((el)=> map.set(el ,(map.get(el) || 0) +1))
  
    for(let times of map.values()){
        max = Math.max(max, times)
    }
    let ans = [];
    
    //key값을 돌면서 최빈값과 같은 값을 찾아줍니다.
    [...map].forEach((el)=>{
        let [num, times] = el
        if(times === max){
            ans.push(num);
        }
    })
    //value 길이가 1인 것은 1을 반환한다. 
    if(ans.length === 1) return ans[0];
    return -1;
}