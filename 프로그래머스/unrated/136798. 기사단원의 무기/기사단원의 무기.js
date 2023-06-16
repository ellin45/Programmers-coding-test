function divisor(n) {
  let cnt = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) cnt++;
    else if (n % i === 0) cnt += 2;
  }
  return cnt;
}

function solution(number, limit, power) {
    let temp = [];
    
    for(let i=1; i<=number; i++) temp.push(divisor(i));
    
    return temp.reduce((acc,cur)=>{
        if(cur>limit) acc+=power;
        else acc+=cur;
        return acc;
    },0);
}


//공격력의 한계는 3
//약수의 개수는 3개까지 가능
//공격력에 따라 필요한 무게가 달라짐
//무게 = power * divisor.slice(0,limit)





