function solution(a, b, n) {
    let totalGetCola = 0;
    let nowGetCola = 0;
    let inputCola = n;

    while (inputCola >= a) {
        nowGetCola = parseInt(inputCola / a) * b
        totalGetCola += nowGetCola
        inputCola = nowGetCola + inputCola % a
    }
    return totalGetCola;
}

//a= 빈병
//b = 마트에서 주는 콜라 병 개수
//n = 가지고 있는 빈병의 개수