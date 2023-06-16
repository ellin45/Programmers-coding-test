// function solution(s)
// {
//     let answer = 0;
//     let stack = [];
//     let curr = [];
//     let prev = [];
   
//     //이전에 들어간 값 = prev
//     //curr 과 prev를 비교해서 같다면 pop을 해준다
//     //s.length === 0 이면 1을 반환하고
//     //s.length > 0 이면 0을 반환합니다.
//    s.split('').forEach((val,i) => {
//    //s를 돌면서 하나씩 스택에 저장해준다.
//         stack.push(val);
//     //현재 스택에 들어간 값 = curr
//         if(stack.length === 0){
//             curr = stack[stack.length-1]
//             console.log(stack)
//         }else if{
//             (stack !== 0)
//             // 지금 curr 값이 prev값으로 변했죠
//             prev = curr
//             //그리고 나서 둘이 같으면 pop을 해줘버려 
//             //stack의 prev와 curr요소를
//         }
//         if(prev === curr){
//                 stack.pop()
//             }
//        if(stack.length === 0){
//            answer = 1
//            return;
//        }else{
//            answer = 0
//            return;
//        }
//               })
    

//     return answer;
// }

function solution(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}
