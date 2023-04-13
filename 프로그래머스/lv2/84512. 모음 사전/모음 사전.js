function solution(word) {
    const words = gererateAllWords();
    return words.indexOf(word) + 1;
}


function gererateAllWords() {
    const letters = ['A', 'E', 'I', 'O', 'U'];
    const LEN = letters.length;
    const words = [];
    for(let i = 0; i < LEN; i++) {
        words.push(letters[i]);
        for(let j = 0; j < LEN; j++) {
            words.push(letters[i] + letters[j]);
            for(let k = 0; k < LEN; k++) {
                words.push(letters[i] + letters[j] + letters[k]);
                for(let l = 0; l < LEN; l++) {
                    words.push(letters[i] + letters[j] + letters[k] + letters[l]);
                    for(let m = 0; m < LEN; m++) {
                        words.push(letters[i] + letters[j] + letters[k] + letters[l] + letters[m]);
                    }
                }
            }
        }
    }
    return words;
}