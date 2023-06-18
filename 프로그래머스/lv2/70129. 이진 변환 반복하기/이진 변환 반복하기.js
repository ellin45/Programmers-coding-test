function solution(s) {
    let zeroCount = 0;
    let binaryCount = 0;
    
    while(s !== "1") {
        let oneCount = 0;
        
        
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '1') {
                oneCount++;
            } else {
                zeroCount++;
            }
        }
        
        
        s = oneCount.toString(2);
        
        binaryCount++;
    }
    
    return [binaryCount, zeroCount];
}

    //0이 나올떄 몇개를 지웠는지 세야함
    //카운트 계속 올림
    //다시 지운뒤 그 문자열에서 2진변환을 하고
    //2진 변환했을때 카운트 올림
    //다시 0이 나오면 카운트 계속 올리고
