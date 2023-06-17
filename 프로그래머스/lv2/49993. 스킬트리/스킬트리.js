function solution(skill, skill_trees) {
    let cnt = 0;
  skill_trees.forEach(skillTree => {
      let filtered = skillTree.split('').filter(el => skill.includes(el)).join('')
      let isCorrect = filtered.split('').every((el,idx) => el === skill[idx]);
      if(isCorrect){cnt++;}
  })
    //CBD가 아닌것을 거르고 나서
    //el, idx를 비교해주자
    //그리고 나서 가능한 개수를 return하자
    return cnt;


}
// function solution(skill, skill_trees) {
//     let cnt = 0;
//     //원본 배열 훼손 방지 ,복사
//     skill_trees.forEach(skillTree => {
//         let filtered = skillTree.split('').filter(el => skill.includes(el)).join('');
//         let isCorrect = filtered.split('').every((el,idx)=> el ===skill[idx]);
//         if(isCorrect){
//             cnt++;
//         }
//     });

//     return cnt;
// }

//1.skill에 해당하는 값이 있는지 skill_trees에서 배열을 돌면서 확인
//2. includes된 문자열을 제외한 문자열은 제거해준다.
//3. 각각의 인덱스를 skill과 비교한다.
//4. 순서가 맞다면 return 값을 하나 추가하고
//4-1 순서가 틀리다면 다음 문자열로 넘어간다.
//5.순서가 맞는 배열의 개수(같은 bool)만 return한다.


