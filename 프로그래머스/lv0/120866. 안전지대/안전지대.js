function solution(board) {
    const n = board.length;
    const dangerZone = Array.from(Array(n), () => new Array(n).fill(0));

    // 상, 하, 좌, 우, 좌상, 우상, 좌하, 우하 방향을 나타내는 리스트
    const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
    const dy = [0, 0, -1, 1, -1, 1, -1, 1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 지뢰가 있으면
            if (board[i][j] === 1) {
                for (let k = 0; k < 8; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];

                    if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                        // 지뢰 주변 영역을 위험지역으로 표시
                        dangerZone[nx][ny] = 1;
                    }
                }
                // 지뢰 위치 자체도 위험지역으로 표시
                dangerZone[i][j] = 1;
            }
        }
    }

    let safeZone = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dangerZone[i][j] === 0) {
                safeZone += 1;
            }
        }
    }

    return safeZone;
}
