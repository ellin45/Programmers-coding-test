function solution(clothes) {
  let types = {};
  let result = 1;

  // 의상 종류별 개수 count
  clothes.forEach((v) => {(types[v[1]] = (types[v[1]] || 0) + 1) });

  // (종류A + 입지 않는 경우) * (종류B + 입지 않는 경우) * ...
  // (A+1) * (B+1) * ...
  for (const key in types) {
    result *= types[key] + 1;
  }

  // 아무 것도 입지 않는 경우 제외 후 return
  return result - 1;
}
// 같은 의상종류는 겹쳐서 입을수 없음
// 하나의 의상종류는 하나만 입을수 있음
// 해시에서 키값은 의상종류 값은 의상이름
//