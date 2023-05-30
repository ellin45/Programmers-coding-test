function solution(orders, course) {
  const answer = [];
  course.forEach((n) => {
      //조합의 등장횟수를 저장
    const result = {};
      //현재까지 가장 많이 등장한 횟수를 저장
    let max = 0;

    orders.forEach((order) => {
      const combinations = getCombinations([...order], n);
      combinations.forEach((combination) => {
        const menu = combination.sort().join("");
          //이미 같은 조합이 'result' 객체에 등록되어있다면 등장횟수를 증가
        if (result[menu]) {
          result[menu] += 1;
          max = max < result[menu] ? result[menu] : max;
            //아니라면 객체에 등록하고 등장횟수를 1로 설정합니다.
        } else result[menu] = 1;
      });
    });
    //'max '값이 2이상인 조합들을 'answer' 배열에 추가
      //'result'객체를 순회하면서 등장횟수가 max와 같은 조합들을 'answer'에 추가합니다.
    if (max >= 2)
      for (const [key, value] of Object.entries(result)) {
        if (value === max) answer.push(key);
      }
  });
  return answer.sort();
}

const getCombinations = (arr, selectNumber) => {
  const results = [];
//선택할 원소 개수가 1이라면 배열의 각 원소를 단일 원소 조합으로 변환하여 반환.
  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }
//배열을 순회하면서 각 원소를 고정으로 선택한뒤, 나머지 배열 요소들에서 getCombinations 함수를 재귀적으로 호출하여 나온 조합들을 모두 수집합니다.
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
      //고정된 원소와 재귀적으로 생성된 조합들을 합쳐서 새로운 조합을 생성합니다.
      //이렇게 생성된 조합들을 'results'배열에 추가합니다.
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
};

//orders에 course가 몇번 중복되어 나왔는지 확인한다.
//중복된 횟수를 나타내는 방법 
//1. solution 함수는 order에서 조합의 등장 횟수를 계산하여 가장 인기 있는 조합들을 찾아서 반환합니다.
//2. getCombinations 함수는 재귀적으로 조합을 생성하는 함수입니다.
//중복된 횟수가 2회 이상이라면 코스에 추가시키므로 1번 주문한 order에서 제외된다.
//2회 이상의 주문횟수를 충족한 course를 answer에 넣어준다.
//answer를 오름차순으로 배열한다.