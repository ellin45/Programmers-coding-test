//1.sort를 활용해서 2개의 원소를 비교한다.
//1-1. 각 원소는 n과의 차이를 구한다.
//2. 각 원소의 n과의 차이가 같은 경우, 더 큰 수를 앞에 오도록 배치.
//3. 각 원소의 n과의 차이가 다른 경우, 차이가 작은 값을 앞으로 정렬한다.
function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        let [aGap, bGap] = [Math.abs(a-n), Math.abs(b-n)];
        if(aGap===bGap) return b-a;
        return aGap - bGap;
    })
}