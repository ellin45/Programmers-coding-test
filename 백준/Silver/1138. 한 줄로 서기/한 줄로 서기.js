const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let room = input[1].split(' ').map(Number);
let line = new Array(N).fill(0);

function solve(){
for(let i=1; i <= N; i++){
    let count = room[i-1]; // 키가 i인 사람의 왼쪽에 더 큰 사람이 몇명있는지
    for(let j=0; j < N; j++){ // 줄을 서는 위치를 왼쪽 부터 오른쪽까지 차례대로
        if(line[j] == 0 && count == 0) {//만약 현재 위치에 아무도 없다면
            line[j] = i; // 그 사람이 그 위치에 섭니다.
            break; // 다음 사람을 위해 종료
        } else if(line[j] == 0){ //아무도 현재위치에 없는데 키가 i인 사람이 빈 자리를 건너뛰어야한다면
            count --; //빈자리를 하나 건너뜁니다
        }
    }
}
console.log(line.join(' '));//줄 선 대로 키를 출력
}
solve();