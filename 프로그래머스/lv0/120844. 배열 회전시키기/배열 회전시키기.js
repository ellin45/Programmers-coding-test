function solution(numbers, direction) {
    var answer = [];
     if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    var answer = numbers;

return answer;
}