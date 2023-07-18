function solution(n, lost, reserve) {
    let actualReserve = reserve.filter(x => !lost.includes(x));
    let actualLost = lost.filter(x => !reserve.includes(x));
    
    actualLost.sort((a,b) => a - b);
    actualReserve.sort((a,b) => a - b);

    for(let i = 0; i < actualReserve.length; i++) {
        if(actualLost.includes(actualReserve[i]-1)) {
            actualLost.splice(actualLost.indexOf(actualReserve[i]-1), 1);
        } else if(actualLost.includes(actualReserve[i]+1)) {
            actualLost.splice(actualLost.indexOf(actualReserve[i]+1), 1);
        }
    }
    console.log(actualLost,actualReserve)
    return n - actualLost.length;
}

// 우리는 여벌의 체육복을 가져온 학생들이 체육복을 어떻게 나눠주는지 알 수 있습니다. 
//먼저, 자기 자신에게 체육복을 빌려줄 수 있는 경우(즉, 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우)를 확인하고, 그런 경우가 없으면 앞번호나 뒷번호의 학생에게 체육복을 빌려주는 방식으로 접근하겠습니다

