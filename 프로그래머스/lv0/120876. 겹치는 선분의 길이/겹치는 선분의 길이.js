function solution(lines) {
    
    //배열로 만들어주자 뭐를? 세 선분을 start와 end로 구분된..
    let map = new Map();
    lines.forEach((item) =>{
        const [start, end] = item;
        
        for(let i=start; i<end; i++){
            //map에 넣고 싶은데 이미 i라는 키를 가진 value가 있어 그럼 그 값에 +1를 해주자
            if(!map.get(i)){
                map.set(i,1)
            }else if(map.get(i)){
                map.set(i,map.get(i)+1);
            }
        }
    });
    const countArr = [];
    map.forEach((value,key,idx,selfArr) =>{
        if(value >=2){
            countArr.push(key);
        }
    })
    
    return countArr.length;
}