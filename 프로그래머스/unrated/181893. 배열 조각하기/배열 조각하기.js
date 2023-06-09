function solution(arr, query) {
query.forEach((value, i) => {
// current idx : 0 -> query[i] === value === 4
// query를 순회하면서 다음 작업을 반복합니다.
// 짝수 인덱스에서는 {arr에서} (query[i] === value)4번 인덱스를 제외하고 배열의 4번 인덱스 뒷부분을 잘라서 버립니다.
// 홀수 인덱스에서는 arr에서 1번 인덱스는 제외하고 배열의 1번 인덱스 앞부분을 잘라서 버립니다.
// [0, 1, 2, 3, 4]
if (i % 2 === 0) {
// 4 우리는 3개를 짤라야해
arr.splice(value + 1) // 0번째부터 value + 1개까지 짤라줘
// arr.slice(2, 2) -> 두번째부터 두번째까지 -> 1개
// arr.splice(2, 2) -> 2번째부터 2개 ->
} else {
arr = arr.slice(value)
}
});
return arr;
}
    