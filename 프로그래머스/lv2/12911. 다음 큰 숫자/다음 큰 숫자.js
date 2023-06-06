function solution(n) {
    let numbers = n.toString(2);
    let countOfOneInN = [...numbers].filter((el) => '1' === el).length;

    
    while (true) {
        n++;
        let binaryOfNextNum = n.toString(2);
        let countOfOneInNextNum = [...binaryOfNextNum].filter((el) => '1' === el).length;
        
        if (countOfOneInN === countOfOneInNextNum) {
            return n;
        }
    }
}



//n을 toString으로 2진법으로 바꾼다.
     //문자열로 변환한다
    //문자열에 0이있다면 제거하고
//n과 다음 문자의 문자열의 길이가 같다면 같은 숫자이다.


