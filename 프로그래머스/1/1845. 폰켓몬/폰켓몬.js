function solution(nums) {
    let numLength = nums.length/2;
    let answer = 0;

    let arr = nums.filter((el,index)=>{
        return nums.indexOf(el) === index;
    })
    
    if(arr.length > numLength){
        answer = numLength
    }else{
        answer = arr.length
    }
    return answer;
}
//중복이 됬을때 => 중복값 제거

