function solution(array) {
    let mode = new Map();

    array.forEach((el) => {
        mode.set(el, (mode.get(el) || 0) + 1);
    });

   
    let sortedPairs = [...mode.entries()].sort((a, b) => b[1] - a[1]);


    if (sortedPairs.length === 1 || sortedPairs[0][1] > sortedPairs[1][1]) {
        return sortedPairs[0][0];
    } else {
        return -1;
    }
}

