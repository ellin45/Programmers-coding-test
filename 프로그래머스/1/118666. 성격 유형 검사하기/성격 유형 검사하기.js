function solution(survey, choices) {
    const types = {R: 0, T: 0, C:0, F:0, J:0, M:0, A:0, N:0 };
    
    survey.forEach((n, idx) => {
        const type = n.split("");
      
        //4보다 작다면 첫번째 유형에 점수 추가
        if(choices[idx] < 4){
            types[type[0]] += 4 - choices[idx];
        }
        //4보다 크다면 두번째 유형에 점수 추가
        if(choices[idx] > 4){
            types[type[1]] += choices[idx] - 4;
        }
    });
    
    const pairs = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    let result = '';
    
    pairs.forEach((pair) => {
        //서로 점수 비교 더 높은 점수 유형을 추가
        if(types[pair[0]] < types[pair[1]]){
            result += pair[1];
        } else {
            result += pair[0];
        }
       console.log(result)
    });
    return result;
}


