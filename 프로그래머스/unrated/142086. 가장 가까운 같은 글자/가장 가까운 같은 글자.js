function solution(s) {
    let result = [];
    let lastPos = {};
    
    s.split("").forEach((char, i) => {
        if (char in lastPos) {
            result.push(i - lastPos[char]);
        } else {
            result.push(-1);
        }
        lastPos[char] = i;
        console.log(lastPos[char],i)
    });
    return result;
}

//스택을 쌓으면서 앞 요소에 나와 같은 원소가 있는지 확인한다.
//s의 요소들을 하나씩 배열에 넣어줍니다.
//앞의 요소들을 확인했을떄 중복 값이 있다면 2
    //없다면 -1
