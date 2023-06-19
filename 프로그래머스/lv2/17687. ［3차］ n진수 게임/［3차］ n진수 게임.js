function solution(n, t, m, p) {
    var answer = '';
    let str = '';
    //10진법으로 표시 A부터는 10
    //튜브의 순서가 오려면 p번째.
    //t개를 나열
    for(let i=0; i<t*m; i++){
        answer += i.toString(n)
    }
       answer = answer.toUpperCase()
    
    for(let i= p-1; i<t*m; i+=m){
        str += answer[i]
    }
    return str;
}