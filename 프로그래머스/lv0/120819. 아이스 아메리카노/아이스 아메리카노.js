function solution(money) {
    let answer = [];
    let cnt = 0;
    let left_money =0;
    cnt = parseInt((money/5500),10)
    left_money = Math.floor(money % 5500)
    answer.push(cnt)
    answer.push(left_money)
    return answer;
}