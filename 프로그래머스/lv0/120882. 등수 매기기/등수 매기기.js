function solution(score) {
    var answer = [];
    let average = score.map((item) => {
       let [math, eng] = item;
        return (math+eng)/2;
    });
    
    let sorted = [...average].sort((a,b)=>b-a);
    
    return average.map((item)=> sorted.indexOf(item)+1);
}

// 1. 평균을 담은 새로운 배열을 만들어줍니다.

// 2. 평균을 내림차순으로 정렬한 새로운 배열을 만든다. 
//    단 평균을 담은 배열 훼손 X

// 3. 평균을 담은 배열을 돌면서 현재 값이 정렬된 배열의 어디에 있는지 찾아줍니다. 

