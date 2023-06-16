function solution(s) {
    let min_length = s.length;

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let compressed = '';
        let prev = s.substring(0, i);
        let count = 1;

        for (let j = i; j < s.length; j += i) {
            let substr = s.substring(j, j + i);
            if (prev === substr) {
                count++;
            } else {
                compressed += (count > 1 ? String(count) : '') + prev;
                prev = substr;
                count = 1;
            }
        }

        compressed += (count > 1 ? String(count) : '') + prev;
        min_length = Math.min(min_length, compressed.length);
    }

    return min_length;
}



    //스택을 하나씩 쌓는다 하나씩 자른 문자열을~ stack에 아무것도 없다면?
    //문자열을 push한다.
    //하나씩 쌓을때마다 가장 뒤에 있는 문자랑 같으면 하나를 없애주고(pop) cnt를 증가한다.
    //가장 뒤에 있는 문자랑 다르면 하나를 push해준다.
    //스택에 쌓인 문자열의 개수를 반환하고
    //나머지 문자열을 붙여준다.
    //모두 붙힌뒤 그 문자열의 길이를 반환한다.
    // return answer;