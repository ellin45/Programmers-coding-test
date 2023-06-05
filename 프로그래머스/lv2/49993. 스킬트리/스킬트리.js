function solution(skill, skill_trees) {
    let cnt = 0;
    skill_trees.forEach(skillTree => {
        let filtered = skillTree.split('').filter(el => skill.includes(el)).join('');
        let isCorrect = filtered.split('').every((el,idx)=> el ===skill[idx]);
        if(isCorrect){
            cnt++;
        }
    });
    return cnt;
}

