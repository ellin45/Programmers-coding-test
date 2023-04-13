function solution(word) {
  const alph = ["A", "E", "I", "O", "U"];

  let count = 0;
  let answer;
	// 플래그 변수의 활용으로 dfs를 최적화 할 수 있다
  let result = false;

  const dfs = (str) => {
    if (str === word) {
      answer = count;
      result = true;
      return;
    }

    if (str.length === 5 || result) return;
    for (let i = 0; i < alph.length; i++) {
      const nextWord = str + alph[i];
      count++;
      dfs(nextWord);
    }
  };
  dfs("");

  return answer;
}