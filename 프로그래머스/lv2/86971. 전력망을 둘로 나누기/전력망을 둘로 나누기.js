// 1. 전력망을 만들어줍니다.
// 2. 전력망에서 한개씩 끊어서 2개의 전력망으로 나눠줍니다.
// 3. 2개의 전력망의 각각 송전탑의 개수의 차이를 구하고, 차이값의 최소를 구해줍니다.

function solution(n, wires) {
    const network = Array.from({length:n+1},()=>[])
    
    wires.forEach((item,i)=>{
      const [from, to] = item;
      network[from].push(to);
      network[to].push(from);  
    })
    let min = 100;
    
    for(let i=0; i<wires.length; i++){
        min=Math.min(min, getDiff(i));     
    }
    
    return min;
    
    function getDiff(index) {
    let leftConnection = new Set();
    let [from, to] = wires[index];
 
   leftConnection.add(from);
        
    for (let v of leftConnection) {
      network[v].forEach((value) => {

        if (value !== to) {
          leftConnection.add(value);
        }
      });
    }
    return Math.abs(n - leftConnection.size * 2);
  }
}