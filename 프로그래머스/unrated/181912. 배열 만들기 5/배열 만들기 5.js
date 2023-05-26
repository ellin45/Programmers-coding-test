function solution(intStrs, k, s, l) {
    const result = [];
    intStrs.forEach((val)=> {
        const substr = val.substr(s, l);  // s번 인덱스에서 시작하는 길이 l짜리 부분 문자열 추출
        const num = parseInt(substr, 10);  // 추출한 부분 문자열을 정수로 변환
        if (num > k) {  // 변환한 정수가 k보다 큰 경우
            result.push(num);  // 결과 배열에 추가
        }
    })
    return result;
}