function solution(ingredient) {
    const burger = [1,2,3,1];
    let stack = [];
    let count = 0;
    
    ingredient.forEach((el)=>{
        stack.push(el);
        while(stack.length >=4){
            const top4 = stack.slice(-4).join('')
            const burgerPattern = burger.join('');
            if(top4 === burgerPattern){
                stack.splice(-4);
                count++;
            }else{
                break;
            }
        }
    })
    return count;
}

//빵 : 1, 야채 : 2, 고기 : 3
//햄버거가 되는 조건 : 1이 무조건 2개여야하고, 인덱스의 0과 -1 에 존재해야한다
//중간에 1,1 사이에 2와 3개가 몇개가 오는지는 중요하지 않음
//앞과 뒤에 1이 오기만 하면 바로 slice를 하고 조건이 맞으면 return true

//1,2,3,1
//1,2,1
//1,3,1
//햄버거가 되지 않는 조건 : 인덱스의 0에 2,3 이 오는경우 || 또는 인덱스의 -1이 2,3이 오는 경우
//중간에 무조건 2,3이 오면 바로 return false
//2,1,3
//1,3,2
//
//true의 개수를 result에 반환