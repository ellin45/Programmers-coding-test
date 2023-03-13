function solution(array, height) {
    array.push(height);
    array.sort((a,b) => a-b);
    var answer = array.length - array.lastIndexOf(height) - 1;
    return answer;
}


