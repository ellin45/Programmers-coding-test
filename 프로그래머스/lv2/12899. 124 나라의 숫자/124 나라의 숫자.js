function solution(n) {
    const oneTwoThreeMap = {
        1: 1,
        2: 2,
        0: 4,
    }
    let result = ''
    
    while(true) {
        if(n === 0) break
        
        result = oneTwoThreeMap[n % 3] + result;
        n = (n % 3 === 0) ? Math.floor(n / 3-1) : Math.floor(n /3);
    }
    return result;
}
