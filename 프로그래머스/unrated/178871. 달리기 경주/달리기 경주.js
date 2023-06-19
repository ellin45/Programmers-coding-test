function solution(players, callings) {
    var answer = [];
    let playermap = {};
    
    //calling 원소들의 index를 미리 구해서 저장
    for(let i=0; i < players.length; i++){
        playermap[players[i]] = i;
    }
    
    for(let i=0; i< callings.length; i++){
        const idx = playermap[callings[i]];
        const temp = players[idx-1];
        
        //해당 idx와 이전 idx의 원소를 swap
        players[idx-1] = callings[i];
        players[idx] = temp;
        
        //map의 idx도 갱신
        playermap[callings[i]] = idx - 1;
        playermap[temp] = idx;
    }
    
    return players;
}