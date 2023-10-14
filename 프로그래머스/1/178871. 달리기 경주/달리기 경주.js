function solution(players, callings) {
    let answer = [];
    let playerMap = {};
    for(let i=0; i<players.length;i++){
        playerMap[players[i]] = i
        // console.log(playerMap)
    }
    for(let i=0; i<callings.length; i++){
        let idx= playerMap[callings[i]];
        let temp=players[idx-1]
       
        //이전 
        players[idx-1] = callings[i] // temp = callings[i]
        players[idx]= temp; 
        
        //이전후 Map 인덱스 변경
        playerMap[callings[i]] = idx-1 //idx = idx-1
        playerMap[temp] = idx 
        
    }
    return players;
}