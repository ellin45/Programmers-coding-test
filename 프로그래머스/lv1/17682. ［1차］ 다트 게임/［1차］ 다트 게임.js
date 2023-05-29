function solution(dartResult){
    //총점수
    let num = 0;
    //다트 던지기 점수
    let answer = [];
    //현재 점수
    let temp = 0;
    
    for(let i=0; i < dartResult.length; i++){
        //0부터 9까지의 숫자인지 확인
        if(dartResult[i] >= 0 && dartResult[i] <= 9) {
            //'1','0'인 경우 10으로 처리후 다음 인덱스로 건너뜀
            if(dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            }
            else {
                temp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S'){
            answer.push(temp);
        }
        else if(dartResult[i] === 'D'){
            answer.push(Math.pow(temp,2));
        }
        else if(dartResult[i] === 'T'){
            answer.push(Math.pow(temp,3));
        }
        else if(dartResult[i] == '#'){
            answer[answer.length-1]*=-1;
        }
        //배열의 마지막 두요소를 2배 하는식
        else if(dartResult[i] == '*'){
            answer[answer.length-1]*=2;
            answer[answer.length-2]*=2;
        }
    }
    //모든 점수를 합산 하는 for문
    for(let i=0; i <answer.length; i++){
        num += Number(answer[i]);
    }
    return num;
}