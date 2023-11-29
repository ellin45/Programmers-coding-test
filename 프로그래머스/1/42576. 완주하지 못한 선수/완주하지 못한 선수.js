function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for(let i=0; i<participant.length;i++){
        if(participant[i]!==completion[i]){
            return participant[i]
        }
    }
    
}
//completion에 포함 하는 participant를 찾는다.

//completion에 포함되지 않는 participant를 return 한다.
//count가 2이상 되지 않으면 그 배열 값을 return한다.