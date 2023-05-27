function solution(numbers, hand) {
    //1. *,#의 위치를 설정해 줍니다.
    let [left,right] = ['*','#'];
    //2. 값을 담을 answer를 설정해줍니다.
    let answer = '';
    
    //2-1 왼손과 오른손이 키패드의 각각 가까운 숫자는 미리 설정을 해둡니다.
    numbers.forEach((target) => {
        if(target === 1|| target === 4 || target === 7){
            left = target;
            answer += 'L';
            return;
        }
        if(target === 3|| target === 6 || target === 9){
            right = target;
            answer += 'R';
            return;
        }
        //3.거리가 같다면 왼쪽 손가락과 누를번호의 위치 vs 오른쪽 손가락과 
        //누를번호의 위치의 거리를 구해줍니다.
        let leftDis = getDis(target,left);
        let rightDis = getDis(target,right);
        
        if(leftDis === rightDis){
            if(hand === 'left'){
                left = target;
                answer += 'L';
            }
            else{
                right = target;
                answer += 'R';
            }
            return;
        }
        
        //leftDis와 rightDis의 거리 차이가 더 작은 손의 움직임을 반환합니다
        if(leftDis > rightDis){
            right = target;
            answer += 'R';
        }else{
            left = target;
            answer += 'L';
        }
    });
    return answer;
}
//키패드의 위치를 정해줍니다
function getDis(target, hand){
    const keyPad = {
        1: [0,0],
        2: [0,1],
        3: [0,2],
        4: [1,0],
        5: [1,1],
        6: [1,2],
        7: [2,0],
        8: [2,1],
        9: [2,2],
        '*': [3,0],
        0: [3,1],
        '#': [3,2],
    
    }
    //키패드의 위치를 절댓값을 씌워 거리 차이를 구합니다.
    return (Math.abs(keyPad[target][0] - keyPad[hand][0]) + Math.abs(keyPad[target][1] - keyPad[hand][1]));
}




