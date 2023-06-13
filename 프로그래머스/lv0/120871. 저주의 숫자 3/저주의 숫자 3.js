function solution(n) {
  // list를 만들고 숫자를 넣자
  // 1부터 ++ 되는 increaseNum 을 선언하고 3마을에서 쓰일수 있을때 업데이트
  // 1부터 25까지 돌아야하니까 count라는 변수를 1로 선언해서 증가시켜주자
  // 반복문
  // 종료조건 -> if : n === count -> 왜? 1부터 25까지 돌릴건데 25가 되면 더이상 돌릴필요 x
  //3의 배수와 숫자 3을 사용하지 않습니
  // if : String(n).includes(3) || n % 3 === 0 -> continue 넘어가야해
  // 추가 가능할때
  // else : list.push(넣을 수 있는 숫자)
  // 인덱스 자체가 10진법 숫자입니다.
  let villageNums = [];

  let count = 0;
  let increaseNum = 1;
  while (true) {
    // 종료조건
    if (n === count) break;

    // 추가못할때 if : String(n).includes(3) || n % 3 === 0 -> continue 넘어가야해
    if (String(increaseNum).includes(3) || increaseNum % 3 === 0) {
      increaseNum++;
      continue;
    } else {
      // 추가 가능할때 1, 2, (3은 안됨), 4, 5, (6은안됨), 7, 8, (9는 안됨), ...
      villageNums.push(increaseNum);
      increaseNum++;
      console.log(villageNums);
    }
    count++;
  }

  return villageNums.pop();
}