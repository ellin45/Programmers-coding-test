function solution(nums) {
    let numLength = nums.length/2;
    let set = new Set(nums);
    let size = set.size;
    console.log(size);
     return numLength < size ? numLength : size;
    
}