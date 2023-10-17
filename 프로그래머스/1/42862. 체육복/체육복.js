function solution(n, lost, reserve) {
    let 빌림가능 = reserve.filter(x => !lost.includes(x))
    let 도난당함 = lost.filter(x => !reserve.includes(x))
    
    빌림가능.sort((a,b)=> a-b);
    도난당함.sort((a,b)=> a-b); //오름차순으로 정렬
    // console.log(빌림가능. 도난당함);
    
    for(let i=0; i<빌림가능.length;i++){
        if(도난당함.includes(빌림가능[i]-1)){
            도난당함.splice(도난당함.indexOf(빌림가능[i]-1),1); //빌릴수 있는 애 중에서 도난당함의 인덱스중에서 1개 삭제
        }else if(도난당함.includes(빌림가능[i]+1)){
            도난당함.splice(도난당함.indexOf(빌림가능[i]+1),1); // 빌릴수 있는 애중에서 도난당함의 인덱스+1 1개삭제
        }
    }
    // console.log(빌림가능. 도난당함);
    return n-도난당함.length;
    }