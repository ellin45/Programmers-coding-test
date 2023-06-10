function solution(common) {
    // 등차와 등비를 계산합니다
    let diff = common[1] - common[0];
    let ratio = common[1] / common[0];

    // 등차수열인지 등비수열인지를 확인하기 위한 플래그를 설정합니다
    let isArithmetic = true;
    let isGeometric = true;

    // 모든 항에 대하여
    common.forEach((val, i) => {
        if (i < 2) return;  // 첫 두 항은 건너뜁니다

        // 만약 현재 항과 이전 항의 차이가 공차와 다르다면, 등차수열이 아닙니다
        if (val - common[i-1] != diff) {
            isArithmetic = false;
        }
        
        // 만약 현재 항과 이전 항의 비율이 공비와 다르다면, 등비수열이 아닙니다
        if (val / common[i-1] != ratio) {
            isGeometric = false;
        }
    });

    // 등차수열이라면, 마지막 항에 공차를 더하여 다음 항을 계산합니다
    if (isArithmetic) {
        return common[common.length-1] + diff;
    } 
    // 등비수열이라면, 마지막 항에 공비를 곱하여 다음 항을 계산합니다
    else if (isGeometric) {
        return common[common.length-1] * ratio;
    }
}
