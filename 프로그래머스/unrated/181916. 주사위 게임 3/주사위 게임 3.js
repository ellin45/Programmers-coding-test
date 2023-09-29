function solution(a, b, c, d) {
    let score = 0;
    let diceRolls = new Map();
    [a, b, c, d].forEach((roll) => {
        diceRolls.set(roll, (diceRolls.get(roll) || 0) + 1);
    });
    let keys = Array.from(diceRolls.keys());
    let values = Array.from(diceRolls.values());
    
    if(values.includes(4)){
        score = 1111 * keys[values.indexOf(4)]
        return score;
    }else if(values.includes(3)){
        let p = keys[values.indexOf(3)];
        let q = keys[values.indexOf(1)];
        score = Math.pow(10* p +q,2);
        return score;
    }else if(values.includes(2)){
        if(values.length === 2){
            let idx1 = values.indexOf(2);
            let p = keys[idx1];
            values[idx1] = -1; //Prevent selecting the same index
            let idx2 = values.indexOf(2);
            let q = keys[idx2];
             score = (p+q) * Math.abs(p-q)
            return score;
    }else if(values.length !== 2){
        let p = keys[values.indexOf(2)];
        let idx1 = values.indexOf(1);
        let q = keys[idx1];
        values[idx1] = -1; // Prevent selecting the same index
        let idx2 = values.indexOf(1);
        let r = keys[idx2];
        score = q * r;
       
        return score;
        
    }
    }else if(values.includes(1)){
        score = Math.min(...keys)
        return score;
    }
  return score;
}