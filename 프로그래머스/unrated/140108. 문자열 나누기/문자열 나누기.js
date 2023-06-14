function solution(s) {
  // b를 저장해야겠다 (왼쪽에서 오른쪽으로 읽어나가면서)
  let curChar = [];
  let sameCount = 0;
  let notSameCount = 0;
  let index = 0;
  let nextChar;
  let result = [];
  // loop
  // 저장한 b와 b와 다른문자의 횟수를 저장한다 (x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.)
  // 같은 문자가 나온 횟수, 같지 않은 문자가 나온 횟수 -> sameCount, notSameCount
  // if : (sameCount === notSameCount) 멈추고 splice (끊어줘야하니까)
  // 문자열을 돌다가 끝에 도달했는데 여전히 sameCount !== notSameCount -> 분리하고 (종료)
  while (true) {
    if (index === s.length) break;
    if (s.length === 0) break;
    // 초기값 셋팅 (b를 담아주고 a로 넘어가라, 그 뒤로는 안걸림)
    if (curChar.length === 0) {
      curChar.push(s[index]);
      // console.log(`curChar === 0 : ${curChar}`)
      index++;
      sameCount++;
      continue;
    }

    nextChar = s[index]; // a
    // 같지않아
    if (curChar[0] !== nextChar) notSameCount++;
    // 같을때
    if (curChar[0] === nextChar) sameCount++;
    // console.log({curChar, nextChar ,sameCount, notSameCount})
    if (sameCount === notSameCount) {
      let cuttingStr = [...s].splice(0, index + 1).join("");
      s = s.slice(index + 1);
      // console.log(s)
      index = 0;
      result.push(cuttingStr);
      curChar = [];
      sameCount = 0;
      notSameCount = 0;
      continue;
    }

    index++;
  }
  if (s !== "" && s.length > 0) result.push(s);

  return result.length;
}