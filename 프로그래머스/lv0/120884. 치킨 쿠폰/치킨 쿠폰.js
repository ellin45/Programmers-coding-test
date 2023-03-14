function solution(chicken) {
    var answer = 0;
    let service =0;
    while(chicken > 1){
        answer += parseInt(chicken/10);
        service += chicken % 10;
        chicken = chicken / 10;
    }
    answer += parseInt(service / 10);
    return answer;
}