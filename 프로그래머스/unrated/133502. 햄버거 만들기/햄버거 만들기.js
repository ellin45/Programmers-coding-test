function solution(ingredient) {
    const burger = [1, 2, 3, 1];
    let stack = [];
    let count = 0;

    ingredient.forEach(item => {
        stack.push(item);
        while (stack.length >= 4) {
            // 스택의 상단 4개 요소를 가져와서 burger와 일치하는지 확인합니다.
            const top4 = [stack[stack.length - 4], stack[stack.length - 3], stack[stack.length - 2], stack[stack.length - 1]];
            if (burger.every((value, index) => value === top4[index])) {
                // 햄버거 패턴이 일치하면, 상단 4개 요소를 제거하고 카운트를 증가시킵니다.
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                count++;
            } else {
                // 햄버거 패턴이 일치하지 않으면, 루프를 중지합니다.
                break;
            }
        }
    });

    return count;
}
