function solution(nums) {
   
    let answer = 0;
    const len = nums.length;

    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            for(let k = j+1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}

function isPrime(sum) { // 소수인지 판별하는 함수
    for(let i = 2; i < sum; i++)  // { 2부터 합계까지 더해 하나씩 }
    if(sum % i === 0) return false; //합계값이 인덱스로 나누었을때 0이면 소수야
    return sum > 1; // 합계값이 1보다 크면 return 해
}

