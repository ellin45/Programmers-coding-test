function solution(numbers) {
    let tmp = []
    //1번을 택한뒤 중복된 숫자를 제거하고 오름차순으로 담아야한다.
    for(let i=0; i<numbers.length;i++){
        for(let j= i+1; j < numbers.length; j++){
            tmp.push(numbers[i] + numbers[j])
      
    }  
    }
   const answer = [...new Set(tmp)]
   
   return answer.sort((a,b) => a - b);
}
//인덱스가 다른 두 수를 뽑는 방법
//1. if문을 사용해 i와 j가 같지 않은 경우에만 합을 구할수 있음
//2. j가 문조건 i 보다 1 큰수 에서 시작하면 됨


// function solution(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }

