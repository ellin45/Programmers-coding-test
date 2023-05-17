function solution(nums) {
    let answer = [];
    let tmp = nums.length/2;
    for(let i=0; i<nums.length;i++){
        //tmp가 answer의 길이보다 길고
        if(answer.length < tmp){
            //그 배열의 값이 중복이 아니면
            if(!answer.includes(nums[i])){
                answer.push(nums[i]);
            }
        }
    }
    return answer.length;
}
//nums 배열 안에 중복되지 않는값들과
// tmp 의 값이 더 길다면 
// nums의 배열을 반환하고 그렇지 않다면 n/2를 반환한다.


