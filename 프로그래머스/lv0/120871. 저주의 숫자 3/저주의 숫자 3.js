function solution(n) {
    let answer = 0;

    const checkNumber = (k)=>{
        const numbers = String(k).split("")
        if(k%3===0|| numbers.includes("3")){
            answer++
            checkNumber(answer)
    	} else {
        return
    	}
    }
    for(let i = 0; i<n; i++){
        answer++
        checkNumber(answer)
    }
    return answer
}