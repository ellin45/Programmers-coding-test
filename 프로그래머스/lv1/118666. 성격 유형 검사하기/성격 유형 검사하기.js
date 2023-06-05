function solution(survey, choices) {
    const types = {R: 0, T: 0, C:0, F:0, J:0, M:0, A:0, N:0 };
    
    survey.forEach((n, idx) => {
        const type = n.split("");
        if(choices[idx] < 4){
            types[type[0]] += 4 - choices[idx];
        }
        if(choices[idx] > 4){
            types[type[1]] += choices[idx] - 4;
        }
    });
    
    const pairs = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    let result = '';
    
    pairs.forEach((pair) => {
        if(types[pair[0]] < types[pair[1]]){
            result += pair[1];
        } else {
            result += pair[0];
        }
    });
    
    return result;
}

//1.choices 키 값으로 분류하기
//2.R,C,J,A 는 비동의 || T,F,M,N 동의
//2-1 절댓값을 활용해서 4이상 4이하 분류
//3.각각의 점수 를 키 값으로 분류하기
//4.비동의 종류의 성격유형과 동의 종류의 성격유형중 더 큰값을 리턴한다.
//4-1 만일 같은 값의 성격유형을 비교한다면 사전순으로 정렬해 리턴한다.
