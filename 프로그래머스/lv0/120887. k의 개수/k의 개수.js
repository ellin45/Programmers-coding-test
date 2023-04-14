//1.i부터 j까지의 숫자를 for문을 돌고 배열로 받는다.
//2.그 배열을 하나하나 다 쪼개서 k랑 비교했을때 전부 비교한다.

function solution(i, j, k) {
    let a = ''
    for(i; i<=j; i++){
        a += i;
    }
    return a.split(k).length-1;
}