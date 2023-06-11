
// 계산
// 1. ' + '을 기준으로 나눠 배열에 담아줍니다. 
// 2. 1번을 통해 구한 배열을 x로 구성된 친구들끼리 다 더해줍니다.
// 3. 1번을 통해 구한 배열을 상수끼리 다 더해줍니다.

// 출력
// 4. x가 1인 경우 '1x'가 아닌 'x'로 바꿔줍니다.

// 5. x가 0이면 상수만 문자열로 바꿔 출력합니다.
// 5. 상수가 0이면 x만 출력합니다.
// 6. x와 상수 모두가 존재할 경우 'x + 상수' 형태로 출력합니다.

function solution(polynomial) {
    let split = polynomial.split(' + ');
    
    let x = split.filter((item)=>isNaN(item)).map((item)=>{
        if(item==='x') return '1';
        return item.replace('x','');
    }).reduce((a,c)=>a+Number(c),0);
    
    let num = split.filter((item)=>Number.isInteger(+item)).reduce((a,c)=>a+Number(c),0);

    let updateX = (x===1 ? 'x' : x+'x');
    
    if(!x) return num.toString()
    if(!num) return updateX;
    return updateX +' + ' + num.toString(); 
}
