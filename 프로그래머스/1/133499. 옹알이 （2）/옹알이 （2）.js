function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (babbling[i].includes(words[j].repeat(2))) continue;
			//words의 단어가 2번 연속 반복된 문자열이면 아래 코드 미실행 및 다음 인덱스로 넘김.
      babbling[i] = babbling[i].split(words[j]).join(" ");
			//words에 속한 문자열 + " "(공백)으로 조합 됨,
      //babbling[i]가 words에 속한 문자열로만 구성됐다면 " "(공백)만 남는다.
    }
    if (babbling[i].split(" ").join("").length === 0) answer++;
		//공백을 기준으로 분할하면, 공백인 값과 words에 속하지 않는 문자열들로 각각 쪼개짐.
		//공백인 것들이 words에 속한 올바른 문자열이므로 length가 0인 것을 카운트한다.
  }
  return answer;
}