function solution(k, score) {
    //명예의 전당 배열
    const award = []
    //결괏값
    const result = []
    for(let i=0; i< score.length;i++){
        if(i < k){
            award.push(score[i])
    }
        //이번 점수가 명예의 전당 최하위 점수보다 큰 경우
if(score[i]>Math.min(...award)){
    //가장 작은 수를 이번 점수와 교체 후 내림차순 정렬
    award.pop()
    award.push(score[i])
    award.sort((a,b) => b-a)
}
        result.push(award.at(-1))
}
    return result
}