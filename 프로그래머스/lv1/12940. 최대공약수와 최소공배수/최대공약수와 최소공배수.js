function solution(n, m) {
    const min = Math.min(n, m);
    let common_max = 1;
    for(let i = min; i > 0; i--){
        if(n % i === 0 && m % i === 0){
            common_max = i;
            break;
        }
    }
    return [common_max, common_max * (n / common_max)* (m / common_max)];
}