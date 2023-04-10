function solution(my_string) {
    let answer = '';
    let vowels = ['a','e','i','o','u'];
    for(let i =0; i < my_string.length; i++){
        const item = my_string[i];

    let isvowels = false;
        for(let j = 0; j < vowels.length; j++){
            if(item === vowels[j]){
                isvowels = true;

            }
        } if(isvowels) continue;
    answer += item;
}
    return answer;
}
