function solution(numbers) {
const answer = [];
const set = new Set();
let nums = numbers.split('');
console.log(nums)

// 소수 판별하는 함수
const isPrimeNum = (num) => {
if(num <= 1) return false;
for (let i = 2; i*i <= num; i++) {
if (num % i === 0) return false;
}
return true;
}

// 만들 수 있는 모든 수를 조합한다.(순열 구하기)
const getPermutation = (arr, fixed) => {
if(arr.length < 0) return;

for (let i=0; i<arr.length; i++) {
const newNum = fixed + arr[i];
const copyArr = [...arr];

copyArr.splice(i, 1);

if (isPrimeNum(+newNum)){
set.add(+newNum);
}
getPermutation(copyArr, newNum);
}
}

getPermutation(nums, '');

return set.size;
}
  

    