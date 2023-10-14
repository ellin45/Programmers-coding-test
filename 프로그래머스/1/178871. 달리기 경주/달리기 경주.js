function solution(players, callings) {
    var answer = [];
    let playerMap = {};
    for(let i=0;i<players.length; i++){
        playerMap[players[i]] = i;
        // console.log("playerMap :",playerMap[players[i]])
    }
    for(let i=0; i<callings.length; i++){
        let idx = playerMap[callings[i]];
        let temp = players[idx-1];
        // console.log("이전 전:" ,idx,temp)
        //해당 idx랑 이전 idx swap
        players[idx-1] = callings[i];
        players[idx] = temp;
        // console.log("이전 후:" ,players[idx-1],players[idx])
        //map의 idx도 갱신
        playerMap[callings[i]] = idx-1;
        playerMap[temp] = idx;
        // console.log("맵 이전 후 :",playerMap[callings[i]],playerMap[temp])
    }
    
    return players;
}