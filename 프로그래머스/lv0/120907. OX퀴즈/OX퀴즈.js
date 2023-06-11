function solution(quiz) {
    return quiz.map((item)=>{
        let [a,calculation,b,_,ans] = item.split(' ');

        if(calculation==='-'){
            return Number(a) - Number(b) === Number(ans) ? 'O' : 'X';
        }
        
        if(calculation==='+'){
            return Number(a) + Number(b) === Number(ans) ? 'O' : 'X';
        }
    })
}



