function solution(board) {
    let dangerzone = [[1,0],[-1,0],[0,1],[0,-1],[-1,1],[-1,-1],[1,1],[1,-1]];
    let safeZoneCount = board.length * board[0].length;

    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            if(cell === 1) { 
                safeZoneCount--;
                dangerzone.forEach(dz => {
                    let x = i + dz[0];
                    let y = j + dz[1];
                    
                    
                    if(x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y] === 0) {
                        board[x][y] = 2; 
                        safeZoneCount--;
                    }
                });
            }
        });
    });

    return safeZoneCount;
}
