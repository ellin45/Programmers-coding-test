function solution(k, m, score) {
    //내림차순 정렬 해서 가장 큰 값이 앞으로 가도록 정렬
    score.sort((a, b) => b - a);

    let profit = 0;
    let box = [];

    for (let i = 0; i < score.length; i++) {
        box.push(score[i]);

        // box의 길이가 m이 되면
        if (box.length === m) {
            // 가장 큰 값을 m이랑 곱해서 최대이익을 구함
            profit += Math.min(...box) * m;
            // 다시 초기화
            box = [];
        }
    }

    return profit;
}

//사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
//(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수)
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
//여기서 최대 점수는 어떻게 구하지?
//score중에서 최대 점수가 k
//score.Mathmax가 최대 점수
//ㄹ