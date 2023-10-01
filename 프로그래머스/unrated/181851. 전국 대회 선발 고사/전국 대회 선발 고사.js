function solution(rank, attendance) {
    var answer = 0;
    //일단 되는 학생순서대로 10000* 등수 + 100* 다음 등수+ 다음등수
    const [a,b,c] = rank
    .map((r,i)=> [r,i])
    .filter(([_,i])=> attendance[i])
    .sort(([a],[b])=> a-b)
    
    return 10000*a[1] + 100*b[1] + c[1];
}