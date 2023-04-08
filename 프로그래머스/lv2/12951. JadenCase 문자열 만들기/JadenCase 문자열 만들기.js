function solution(s) {
    return s
    .toLowerCase()
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
    .join(" ");
}
//''다읨 문자는 대문자
//첫문자열이 downcase일경우 upcase로 변환