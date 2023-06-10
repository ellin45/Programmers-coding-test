function solution(num, total) {
    var answer = [];
    
       let i = -50;
    let ans = [];
    
    while(i<=100){
        let temp = [];
        let k = i;//100보다 작은 수들이니까
        for(let j=0; j<num; j++){ // 그리고num의 길이만큼만 돌려
            temp.push(k++);//그리고 나서 100보다 작은것들만 넣어줘
        }
        let sum =temp.reduce((a,c)=>a+c,0); // num만큼 연속된 숫자의 총합이 total이라면?
        if(sum===total) {
            ans=temp; // 
            break;
        }
        i++; // i가 증가하면 'temp' 배열에 넣어지는 숫자들이 1씩 증가하게 되고 그 결과 'temp 의 합계 또한 변하게 됨//가능한 모든 연속된 숫자의 조합을 탐색하는데 필요한 코드임
    }
    return ans;
    
    return answer;
}