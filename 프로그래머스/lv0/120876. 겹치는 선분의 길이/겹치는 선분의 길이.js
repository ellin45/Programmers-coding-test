function solution(lines) {
//겹치는 선분의 길이를 알려면 [start,end]라고 했을때
//x부터 y까지로 늘어뜨린 배열 하나씩이랑 서로 겹치는 숫자가 몇개 있는지가 중요한거같다.
//그럼 x부터 y까지 나올수 있는 숫자를 뽑아서 그 숫자끼리 중복값이 몇개인지를 알면 되지 않나욤
//구조분해 할당을 lines를 [start,end]를 해보자
//map을 이용해 보래여어
//map을 어떻게 사용하냐면 서로 선분끼리 겹치는걸 만들어야하거든여 점은 신경쓰지말고 그러니까 시작점은 포함하지말고 끝점만 +1을 해주는거야
let map = new Map();

// {
// -3 : 1,
// -2 : 1,
// -1 : 1,
// }
// map.set('키', '내가 할당하고 싶은 값 == value')
// map.set(-3, 1)
// map.get('키') -> '키'에 해당하는 값(result)를 가져올거야

lines.forEach((value, idx) => {
// 1번쨰, 2번째, 3번째
// [ [0, 2], [-3, -1], [-2, 1] ]
// current Value : [ 0, 2 ]
let [start, end] = value;
// i : -2 ~ 0
for (let i = start; i < end; i++) {
// i = -2
// map에 넣고싶은데 이미 i 라는 키를 가진 value가 있어
// 그럼 그 값에 + 1 해주자
// 없어 ! -> map에서 get으로 가져올때 아무것도없으면 undefined -> 부정연산자 !undefined => true
// 경우의 수가 2개야 있고 없고.
if (!map.get(i)) {
map.set(i, 1);
} else if (map.get(i)) {
// i라는 키에 할당한 값이 있을때
map.set(i, map.get(i) + 1);
}
}
});

// key : 좌표 (x축)
// value : 각 x 가 몇번 등장했냐 -> 겹친곳이다. -> 등장빈도
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
// 두개 이상이 몇번 등장했냐? 길이를 return 하도록 solution 함수를 완성해보세요.
// arr.forEach((value, idx, selfArr) => {})
const countArr = [];
map.forEach((value, key, idx, selfArr) => {
if (value >= 2) {
countArr.push(key);
}
});
return countArr.length;
}