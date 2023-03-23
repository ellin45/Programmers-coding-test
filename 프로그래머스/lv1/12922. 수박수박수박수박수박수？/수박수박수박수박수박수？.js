function solution(n) {
    var answer = '';
    var wm = '수박수박수박수';
    for(let i=1;i<=n;i++){
        (i%2 === 0) ? answer += '박' : answer += '수';
        }
    return answer;
}