function solution(n)
{
    var answer = 0;
    var a =String(n);
    for(var i=0; i<a.length; i++){
        answer += parseInt(a[i]);
        console.log(answer);
    };
    return answer;
}