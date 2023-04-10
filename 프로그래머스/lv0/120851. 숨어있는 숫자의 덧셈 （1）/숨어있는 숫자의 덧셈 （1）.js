function solution(my_string) {
    var answer = 0;
    let keepNumberString =''
    //string의 문자열배열의 길이만큼 반복하는 반복문
    for(let i = 0; i<my_string.length;i++){
          const item = my_string[i];
        //if(Number가 숫자가 아니면 true, 숫자면 false를 반환)
        //false를 반환하였을때는 continue를 하고
        //true를 반환하였을때는 반복문을 벗어나 answer에 답을 넣음.
            if(Number.isNaN(Number(item))){
                continue;
            }
        //하나씩 숫자를 Number에 넣음
        answer += Number(item);
    }
    return answer;
}