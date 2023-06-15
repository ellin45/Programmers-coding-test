function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}



// function solution(s){
//     var answer = true;
//     let arr = s.split("")

//     //완성(true)이 되는 조건
//     //'('으로 시작하면서 ')'으로 끝날때.
//         for(let i=0; i<arr.length; i++){
//             //시작할때 와 끝날때
//             if(arr[i] === '(' && arr[arr.length-1] === ')'){
//                 answer = true
//                 console.log(answer)
//             }
//         }
//     //미완성(false)이 되는 조건
//         for(let i=0; i<arr.length; i++){
//             //시작할때
//             if(arr[i] === ')'){
//                 answer = false
//             }if(arr[arr.length-1] === '('){
//                 answer = false
//             }
//         }
//         //')'으로 시작하거나
//         //'('으로 끝날때.
//     //결론
//     //s의 앞과 뒤만 비교를 해서 완성 미완성을 구분한뒤에
        
//     //첫번째 구문을 돌렸을때 첫번째 인덱스와 끝 인덱스를 구분하다
//         //그다음 돌때는 두번째 인덱스와 끝에서 두번째 인덱스에서 
        
        
//     return answer;
// }