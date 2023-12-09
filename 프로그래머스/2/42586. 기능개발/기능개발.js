function solution(progresses, speeds) {
    let answer = [];
    let stack = [];

    for (let i = 0; i < progresses.length; i++) {
        let remainingDays = Math.ceil((100 - progresses[i]) / speeds[i]);

        if (stack.length === 0 || stack[stack.length - 1] < remainingDays) {
            // 현재 작업이 이전 작업보다 오래 걸리면 새로운 배포일 설정
            stack.push(remainingDays);
            answer.push(1);
        } else {
            // 이전 작업과 함께 배포되어야 함
            answer[answer.length - 1]++;
        }
    }

    return answer;
}
        




