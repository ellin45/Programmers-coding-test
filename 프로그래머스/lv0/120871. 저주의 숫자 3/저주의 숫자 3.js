function solution(n) {
    let answer = 0;
    
    const checkNumber = (k) =>{
       const numbers = String(k).split("")
       //k가 3의 배수이거나 3을 포함하고 있다면 1을 더해준다
       if(k % 3 === 0 || numbers.includes("3")){
           answer++;
           checkNumber(answer)
       }else{
          return
       }
    }
    //반복문을 돌때마다 무조건 1씩 추가한다.
    for(let i = 0; i<n; i++){
        answer++
        checkNumber(answer)
    }
    return answer
    }