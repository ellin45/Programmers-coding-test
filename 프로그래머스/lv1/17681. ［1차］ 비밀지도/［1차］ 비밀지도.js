function solution(n, arr1, arr2) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    // arr1과 arr2의 원소를 이진수로 변환하고, 길이를 맞춰줍니다.
    let map1 = arr1[i].toString(2).padStart(n, '0');
    let map2 = arr2[i].toString(2).padStart(n, '0');

    let row = '';

    for (let j = 0; j < n; j++) {
      // 두 지도 중 하나라도 벽인 부분은 벽으로 처리합니다.
      if (map1[j] === '1' || map2[j] === '1') {
        row += '#';
      } else {
        row += ' ';
      }
    }

    ans.push(row);
  }

  return ans;
}

//n = 가로 세로 길이

//arr1 = 10진법 숫자니까 2진법으로 만들어주기
//문자열배열로 만든뒤 01000이렇게 만들어서 
//"공백" = 0 replace
// "#" = 1 replace
//한뒤 arr2도 똑같이 만든뒤
// 새로운 배열 value에 공백에 #이 있다면 #으로 바꿔주기