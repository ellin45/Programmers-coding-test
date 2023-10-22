function solution(park, routes) {
    let direction = {"N":[-1,0], "S":[1,0], "W":[0,-1], "E":[0,1]}; // 북, 남, 서, 동 이동 방향
    let position = []; // 로봇 강아지의 현재 위치

    // 공원에서 시작 위치 찾기
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                position = [i, j];
            }
        }
    }

    for (let i = 0; i < routes.length; i++) {
        let command = routes[i].split(" "); // 명령어 분리
        let directionVector = direction[command[0]]; // 이동 방향 벡터
        let distance = parseInt(command[1]); // 이동 거리

        // 로봇 강아지 이동 시뮬레이션
        let newPosition = [position[0], position[1]]; // 이동 후 위치
        for (let j = 0; j < distance; j++) {
            newPosition[0] += directionVector[0];
            newPosition[1] += directionVector[1];

            // 공원 범위를 벗어나거나, 장애물을 만나는 경우 이동 중단
            if (newPosition[0] < 0 || newPosition[0] >= park.length || 
                newPosition[1] < 0 || newPosition[1] >= park[0].length || 
                park[newPosition[0]][newPosition[1]] === 'X') {
                newPosition = [position[0], position[1]]; // 이전 위치로 복구
                break;
            }
        }
        position = newPosition; // 이동 후 위치 업데이트
    }

    return position;
}
