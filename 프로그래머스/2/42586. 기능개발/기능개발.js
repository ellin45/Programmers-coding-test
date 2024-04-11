function solution(progresses, speeds) {
    let days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });
    
    let answer = [];
    let maxDay = days[0];  // 첫 번째 기능이 배포되는 날
    let count = 0;
    
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;  // 현재 기능을 현재 배포일에 포함시킴
        } else {
            answer.push(count);  // 이전 배포일에 배포할 기능들의 수를 기록
            maxDay = days[i];    // 새로운 배포일 설정
            count = 1;           // 새로운 배포일의 첫 기능
        }
    }
    
    answer.push(count);  // 마지막에 남은 기능들을 배포
    return answer;
}