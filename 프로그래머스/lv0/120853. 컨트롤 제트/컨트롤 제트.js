function solution(s) {
    let sum = 0;
    let array = s.split(' ');
    for(let i=0; i<array.length; i++){
        const item = array[i]
        if(item !== 'Z'){
            sum += Number(item)
        }else{
            sum -= Number(array[i-1])
        }
    }
    return sum;
}